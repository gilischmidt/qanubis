<?php

namespace App\Services;


use Illuminate\Support\Facades\Storage;

class FileService
{

    /**
     * @var \Illuminate\Contracts\Filesystem\Filesystem
     */
    private $disk;

    public function __construct($diskToBeUsed = 'local')
    {
        $this->disk = Storage::disk($diskToBeUsed);
    }

    public function store($path, $content)
    {
        return $this->disk->put($path, $content);
    }

    public function exists($filePath)
    {
        return $this->disk->exists($filePath);
    }

    public function download($filePath)
    {
        return $this->disk->download($filePath);
    }

    public function getContent($filePath)
    {
        return $this->disk->get($filePath);
    }

    public function delete($filePath)
    {
        return $this->disk->delete($filePath);
    }

    public function getUrl($filePath)
    {
        return $this->disk->path($filePath);
    }

    public function deleteFolder($folderPath)
    {
        return $this->disk->deleteDirectory($folderPath);
    }
}
