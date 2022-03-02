<?php

namespace App\Http\Controllers\Portal;

use App\Helpers\AppResponseHelper;
use App\Models\Code;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CodeController extends Controller
{
    public function store(Request $request, $projectId)
    {
        $project = $this->user()->projects()->findOrFail($projectId);

        $input = $request->all();
        $input['project_id'] = $projectId;

        try {
            $res = Code::create($input);

            if ($res)
                return response()->json($res);
            else
                return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        } catch (\Error | \Exception $e) {
            Log::error($e);
            dd($e);
            return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        }
    }

    public function update(Request $request, $projectId, $codeId)
    {
        $project = $this->user()->projects()->findOrFail($projectId);
        $code = $project->codes()->findOrFail($codeId);

        $input = $request->all();

        try {
            $res = $code->update($input);

            if ($res)
                return response()->json($code);
            else
                return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        } catch (\Error | \Exception $e) {
            Log::error($e);
            return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        }
    }

    public function destroy($projectId, $codeId)
    {
        $project = $this->user()->projects()->findOrFail($projectId);
        $code = $project->codes()->findOrFail($codeId);

        DB::beginTransaction();
        try {
            $code->quotes()->has('codes','=', 1)->delete();
            $res = $code->delete();

            DB::commit();
            if ($res)
                return response()->json(['deleted' => true]);
            else
                return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        } catch (\Error | \Exception $e) {
            DB::rollBack();
            Log::error($e);
            return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        }
    }
}
