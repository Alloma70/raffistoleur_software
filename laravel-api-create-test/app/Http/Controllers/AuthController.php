<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Client;
use App\Models\Rafistolleur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
{
    try {
        $validatedData = $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'contact' => 'required|string|max:255',
            'quartier' => 'required|string|max:255',
            'statut' => 'required|in:client,rafistolleur',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'nom' => $validatedData['nom'],
            'prenom' => $validatedData['prenom'],
            'contact' => $validatedData['contact'],
            'quartier' => $validatedData['quartier'],
            'statut' => $validatedData['statut'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);

        if ($user->statut === 'client') {
            Client::create([
                'user_id' => $user->id,
                'nom' => $user->nom,
                'prenom' => $user->prenom,
                'contact' => $user->contact,
                'quartier' => $user->quartier,
                'email' => $user->email,
            ]);
        } else {
            Rafistolleur::create([
                'user_id' => $user->id,
                'nom' => $user->nom,
                'prenom' => $user->prenom,
                'contact' => $user->contact,
                'quartier' => $user->quartier,
                'email' => $user->email,
            ]);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Inscription réussie',
            'access_token' => $token,
            'token_type' => 'Bearer',
        ], 201);
    } catch (\Exception $e) {
        \Log::error('Erreur lors de l\'inscription : ' . $e->getMessage());
        return response()->json([
            'message' => 'Erreur lors de l\'inscription',
            'error' => $e->getMessage()
        ], 500);
    }
}


    public function login(Request $request)
{
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    $credentials = $request->only('email', 'password');

    \Log::info('Tentative de connexion pour l\'email : ' . $credentials['email']);

    if (Auth::attempt($credentials)) {
        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;

        \Log::info('Connexion réussie pour l\'utilisateur : ' . $user->id);

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    \Log::warning('Échec de la connexion pour l\'email : ' . $credentials['email']);

    return response()->json([
        'message' => 'Les informations de connexion sont invalides'
    ], 401);
}
}