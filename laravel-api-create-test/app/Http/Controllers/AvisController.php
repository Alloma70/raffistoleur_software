<?php

namespace App\Http\Controllers;

use App\Models\AvisClient;
use App\Models\Client;
use Illuminate\Http\Request;

class AvisController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'nom'=> 'required|string|max:255',
            'email'=> 'required|string|max:255',
            'numero'=> 'required|string|max:255',
            'avis' => 'required|string|max:255',
        ]);

        $avis = new AvisClient();
        $avis->nom = $request->nom;
        $avis->email = $request->email;
        $avis->numero = $request->numero;
        $avis->avis = $request->input('avis');
        $avis->client_id = auth()->client()->id;

        $avis->save();

        return redirect()->route('avis.thank_you'); // Redirection vers une page de remerciement
    }
}