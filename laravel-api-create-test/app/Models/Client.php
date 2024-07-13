<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class client extends Model
{
    use HasFactory;
    
    protected $table ='clients';
    protected $fillable = ['nom','email','numero','password','quartier','dateN','user_id'];



    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    
}
