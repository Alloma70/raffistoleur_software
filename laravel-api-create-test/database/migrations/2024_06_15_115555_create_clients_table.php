<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->String('email')->unique();
            $table->String('numero')->unique();;
            $table->String('quartier');
            $table->date('dateN');
            $table->String('password');
           

            //clé etrangere et relation entre user_id et sa table de refencement
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');

                
            // attribut-Parametres
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('enseignants');
    }
};
