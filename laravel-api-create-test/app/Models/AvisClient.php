<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AvisClient extends Model
{
    use HasFactory;
    protected $table="avis_clients";
    protected $fillable = ['nom','email','numero','quartier','client_id'];


    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
