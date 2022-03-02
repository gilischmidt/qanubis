<?php

namespace App\Http\Controllers\Portal;

use App\Http\Requests\Portal\ProjectRequest;
use App\Models\Document;
use App\Services\FileService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class   ProjectController extends Controller
{
    private $projectStoragePath = 'users/{user_id}/projects/{project_id}';

    public function index()
    {
        return redirect()->route('home');
    }

    public function store(ProjectRequest $request)
    {
        try {
            $project = $this->user()->projects()->create($request->all());
            return redirect()->route('portal.projects.edit', $project->id);
        } catch (\Error | \Exception $e) {
            Log::error($e);
            return back()->with('error', __('app_responses.defaults.error.default'));
        }
    }

    public function edit($projectId)
    {
        $project = $this->user()->projects()->findOrFail($projectId);
        $documents = Document::all();
        $documentFilters = config('constants.document_filters', []);
        $defaultPage = \request()->query->get('page', 'documents');

        return view('app.portal.projects.form', compact('project', 'documentFilters', 'documents', 'defaultPage'));
    }

    public function fetch($projectId)
    {
        $project = $this->user()->projects()
            ->with(['quotes', 'codes', 'documents', 'memos'])
            ->findOrFail($projectId);

        $res = [
            'project' => $project,
            'documents' => $project->documents,
            'codes' => $project->codes,
            'quotes' => $project->quotes()->with('comments', 'codes')->get(),
            'memos' => $project->memos,
        ];

        return response()->json($res);
    }

    public function update(Request $request, $projectId)
    {
        $project = $this->user()->projects()->findOrFail($projectId);

        try {
            if ($project->update($request->all()))
                return response()->json($project);
            else
                return back()->with('error', __('app_responses.defaults.error.default'));
        } catch (\Error | \Exception $e) {
            Log::error($e);
            return back()->with('error', __('app_responses.defaults.error.default'));
        }
    }

    public function destroy(FileService $fileService, $projectId)
    {
        $project = $this->user()->projects()->findOrFail($projectId);
        $user = $this->user();

        try {
            $res = $project->delete();

            if ($res) {
                $projectFolder = str_replace('{user_id}', $user->id, $this->projectStoragePath);
                $projectFolder = str_replace('{project_id}', $projectId, $projectFolder);
                $fileService->deleteFolder($projectFolder);

                return redirect()->route('home')->with('success', __('app_responses.defaults.delete'));
            } else {
                return back()->with('error', __('app_responses.defaults.error.delete'));
            }
        } catch (\Error | \Exception $e) {
            Log::error($e);
            return back()->with('error', __('app_responses.defaults.error.default'));
        }
    }
}
