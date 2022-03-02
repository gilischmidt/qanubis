<?php

namespace App\Helpers;


class FileHelper
{
    public static function getFileFromBase64($base64File)
    {
        $extension = explode('/', explode(':', substr($base64File, 0, strpos($base64File, ';')))[1])[1];

        $replace = substr($base64File, 0, strpos($base64File, ',') + 1);
        $content = str_replace($replace, '', $base64File);
        $content = base64_decode($content);

        return [
            'content' => $content,
            'extension' => $extension,
        ];
    }

    public  static function fileContentToBase64($fileType, $fileContent)
    {
        $fileType = strtoupper($fileType);
        $filePrefix = '';

        switch ($fileType) {
            case 'PDF':
                $filePrefix = 'data:application/pdf;base64,';
                break;
        }

        return $filePrefix . base64_encode($fileContent);
    }
}


