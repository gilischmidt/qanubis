<?php

namespace App\Http\Controllers\Portal;

use App\Helpers\AppResponseHelper;
use App\Helpers\FileHelper;
use App\Models\Document;
use App\Services\FileService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class DocumentController extends Controller
{
    /**
     * @var FileService
     */
    private $fileService;
    private $documentStoragePath = 'users/{user_id}/projects/{project_id}/';

    public function __construct(FileService $fileService)
    {
        $this->fileService = $fileService;
    }

    public function store(Request $request, $projectId)
    {

        $user = $this->user();
        $project = $user->projects()->findOrFail($projectId);

        $document = null;
        $uploadedDocument = false;

        $input = $request->except('file');
        $input['project_id'] = $projectId;

        try {
            $file = FileHelper::getFileFromBase64($request->get('file'));
            $fileName = Carbon::now()->format('Y_m_d_H_s') . '_' . Str::random(5) . '.' . $file['extension'];

            $storeFilePath = str_replace('{user_id}', $user->id, $this->documentStoragePath);
            $storeFilePath = str_replace('{project_id}', $project->id, $storeFilePath);
            $storeFilePath .= $fileName;

            if ($this->fileService->store($storeFilePath, $file['content'])) {
                $uploadedDocument = $storeFilePath;
                $input['file_path'] = $storeFilePath;

                $document = Document::create($input);
            }

            if ($document) {
                return response()->json($document);
            } else {
                if ($uploadedDocument) {
                    $this->fileService->delete($uploadedDocument);
                }

                return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
            }
        } catch (\Error | \Exception $e) {
            if ($document) {
                $document->delete();
            }

            if ($uploadedDocument) {
                $this->fileService->delete($uploadedDocument);
            }

            Log::error($e);
            return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        }
    }

    public function update(Request $request, $projectId, $documentId)
    {
        $project = $this->user()->projects()->findOrFail($projectId);
        $document = $project->documents()->findOrFail($documentId);
        $input = $request->all();

        try {
            $res = $document->update($input);

            if ($res)
                return response()->json($document);
            else
                return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        } catch (\Error | \Exception $e) {
            Log::error($e);
            return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        }
    }

    public function destroy($projectId, $documentId)
    {
        $project = $this->user()->projects()->findOrFail($projectId);
        $document = $project->documents()->findOrFail($documentId);
        $res = true;

        try {
            if (isset($document->file_path) && $this->fileService->exists($document->file_path)) {
                $res = $this->fileService->delete($document->file_path);
            }

            if ($res) {
                $res = $document->delete();
            }

            if ($res)
                return response()->json(['deleted' => true]);
            else
                return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        } catch (\Error | \Exception $e) {
            Log::error($e);
            return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        }
    }

    public function downloadBase64($projectId, $documentId)
    {
        $project = $this->user()->projects()->findOrFail($projectId);
        $document = $project->documents()->findOrFail($documentId);

        try {
            if (isset($document) && isset($document->file_path) && $this->fileService->exists($document->file_path)) {
                return FileHelper::fileContentToBase64($document->type, $this->fileService->getContent($document->file_path));
            }

            return AppResponseHelper::throwAjaxError('File not found.');
        } catch (\Error | \Exception $e) {
            Log::error($e);
            return AppResponseHelper::throwAjaxError(__('app_responses.defaults.error.default'));
        }
    }
}
