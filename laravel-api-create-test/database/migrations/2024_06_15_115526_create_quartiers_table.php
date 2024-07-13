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
        Schema::create('quartiers', function (Blueprint $table) {
            // mes attributs
            $table->id();
            $table->String('nom');
            $table->String('email')->unique();
            $table->string('quartier');

        // clé etrangere et relation entre la clé secondaire et sa table de referencement
        $table->foreignId('user_id')->constrained('users')->onDelete('cascade')->onUpdate('cascade');

         // Parametres
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
        Schema::dropIfExists('filieres');
    }
};
