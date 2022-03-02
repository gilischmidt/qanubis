<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Code extends Model
{
    use HasFactory;

    protected $table = 'codes';
    protected $fillable = [
        'name', 'color', 'text_color', 'brief_description', 'description', 'is_category',
        'project_id', 'parent_code_id'
    ];

    protected $casts = [
        'is_category' => 'boolean'
    ];

    public function project()
    {
        return $this->belongsTo(Project::class, 'project_id');
    }

    public function quotes()
    {
        return $this->belongsToMany(Quote::class, 'quotes_codes');
    }

    public function parent(){
        return $this->belongsTo(Code::class,'parent_code_id');
    }

    public function getTextColorAttribute($text_color)
    {
        return $text_color ?? 'black';
    }
}
