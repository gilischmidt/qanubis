<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quote extends Model
{
    use HasFactory;

    protected $table = 'quotes';
    protected $fillable = [
        'name', 'data', 'extra_data', 'document_id'
    ];

    protected $casts = [
        'extra_data' => 'array',
        'data' => 'array',
    ];

    public function comments()
    {
        return $this->hasMany(QuoteComment::class);
    }

    public function codes()
    {
        return $this->belongsToMany(Code::class, 'quotes_codes');
    }

    public function document()
    {
        return $this->belongsTo(Document::class, 'document_id');
    }
}
