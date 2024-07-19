<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rafistolleur extends Model
{
    protected $fillable = [
        'user_id', 'nom', 'prenom', 'contact', 'quartier', 'email',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}