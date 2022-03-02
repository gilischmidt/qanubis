<?php

namespace App\Models;

use Auto\AutoPaginate;
use Auto\AutoSort;
use Auto\AutoWhere;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use HasFactory;
    use AutoWhere, AutoSort, AutoPaginate;

    protected $table = 'projects';

    protected $fillable = [
        'name', 'description', 'color', 'owner_id'
    ];

    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function documents()
    {
        return $this->hasMany(Document::class, 'project_id');
    }

    public function codes()
    {
        return $this->hasMany(Code::class, 'project_id');
    }

    public function quotes()
    {
        return $this->hasManyThrough(Quote::class, Document::class);
    }

    public function memos()
    {
        return $this->hasMany(Memo::class, 'project_id');
    }

}
