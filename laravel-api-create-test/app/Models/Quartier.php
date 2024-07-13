<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class quartier extends Model
{
    use HasFactory;
    protected $fillable = ['nom','email','quartier','user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
