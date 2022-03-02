<?php

namespace App\Http\Controllers\Portal;

use App\Helpers\AppResponseHelper;
use App\Models\Memo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MemoController extends Controller
{
    public function store(Request $request, $projectId)
    {
        $project = $this->user()->projects()->findOrFail($projectId);

        $input = $request->all();
        $input['project_id'] = $projectId;

        try {
            $res = Memo::create($input);

            if ($res)
                return response()->json($res);
            else
                return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        } catch (\Error | \Exception $e) {
            Log::error($e);
            return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        }
    }

    public function update(Request $request, $projectId, $memoId)
    {
        $project = $this->user()->projects()->findOrFail($projectId);
        $memo = $project->memos()->findOrFail($memoId);

        $input = $request->all();

        try {
            $res = $memo->update($input);

            if ($res)
                return response()->json($memo);
            else
                return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        } catch (\Error | \Exception $e) {
            Log::error($e);
            return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        }
    }

    public function destroy($projectId, $memoId)
    {
        $project = $this->user()->projects()->findOrFail($projectId);
        $memo = $project->memos()->findOrFail($memoId);

        try {
            $res = $memo->delete();

            if ($res)
                return response()->json(['deleted' => true]);
            else
                return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        } catch (\Error | \Exception $e) {
            Log::error($e);
            return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        }
    }
}
