<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuoteComment extends Model
{
    use HasFactory;

    protected $table = 'quote_comments';
    protected $fillable = [
        'content', 'quote_id'
    ];

    public function quote()
    {
        return $this->belongsTo(Quote::class);
    }
}
