<?php

namespace App\Http\Controllers\Portal;

use App\Helpers\AppResponseHelper;
use App\Models\Quote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class QuoteController extends Controller
{
    public function store(Request $request, $projectId)
    {
        $input = $request->all();
        $documentId = $input['document_id'];
        $codesIds = $input['code_id'];
        $comments = $input['comments'] ?? [];

        $project = $this->user()->projects()->findOrFail($projectId);
        $document = $project->documents()->findOrFail($documentId);

        $codes = [];
        foreach ($codesIds as $codeId) {
            array_push($codes, $project->codes()->findOrFail($codeId)->id);
        }

        $comments = array_map(function ($comment) {
            return ['content' => $comment];
        }, $comments);

        DB::beginTransaction();
        try {
            $quote = Quote::create($input);
            $quote->codes()->sync($codes);
            $quote->comments()->createMany($comments);

            DB::commit();

            if ($quote) {
                $res = Quote::with('comments', 'codes')->find($quote->id);
                return response()->json($res);
            } else {
                return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
            }

        } catch (\Error|\Exception $e) {
            DB::rollBack();
            Log::error($e);
            return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        }
    }

    public function update(Request $request, $projectId, $quoteId)
    {
        $input = $request->all();
        $project = $this->user()->projects()->findOrFail($projectId);
        $quote = $project->quotes()->findOrFail($quoteId);

        $codes = $request->get('code_id');

        $commentIds = [];
        $commentsToUpdate = [];
        $newComments = [];
        foreach ($request->get('comments', []) as $comment) {
            if (trim($comment['content']) == '') {
                continue;
            }

            if (isset($comment['id'])) {
                array_push($commentsToUpdate, $comment);
                array_push($commentIds, $comment['id']);
            } else {
                array_push($newComments, ['content' => $comment['content']]);
            }
        }

        DB::beginTransaction();
        try {
            $res = $quote->update($input);
            $quote->codes()->sync($codes);

            foreach ($commentsToUpdate as $comment) {
                $quote->comments()->findOrFail($comment['id'])->update($comment);
            }

            $quote->comments()->whereNotIn('id', $commentIds)->delete();
            $quote->comments()->createMany($newComments);

            DB::commit();

            if ($res) {
                $res = Quote::with('comments', 'codes')->find($quote->id);
                return response()->json($res);
            } else {
                return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
            }
        } catch (\Error|\Exception $e) {
            DB::rollBack();
            Log::error($e);
            return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        }
    }

    public function destroy($projectId, $quoteId)
    {
        $project = $this->user()->projects()->findOrFail($projectId);
        $quote = $project->quotes()->findOrFail($quoteId);

        try {
            $res = $quote->delete();

            if ($res)
                return response()->json(['deleted' => true]);
            else
                return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        } catch (\Error|\Exception $e) {
            Log::error($e);
            return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        }
    }
}
