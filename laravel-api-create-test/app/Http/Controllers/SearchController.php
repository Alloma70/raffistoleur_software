<?php

namespace App\Http\Controllers;

use App\Models\Rafistolleur;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $quartier = $request->input('quartier');
        
        $rafistolleurs = Rafistolleur::where('quartier', 'like', "%$quartier%" )
            ->with(['user' => function($query) {
                $query->select('id', 'nom', 'email', 'statut');
            }])
            ->get()
            ->map(function ($rafistolleur) {
                return [
                    'id' => $rafistolleur->user->id,
                    'nom' => $rafistolleur->user->nom,
                    'email' => $rafistolleur->user->email,
                    'statut' => $rafistolleur->user->statut,
                    'quartier' => $rafistolleur->quartier
                ];
            });

        return response()->json($rafistolleurs);
    }
}
