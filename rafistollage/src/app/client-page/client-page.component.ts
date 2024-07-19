// client-page.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {
  clientName: string = 'Alloma Luc'; 
  searchTerm: string = '';
  rafistolleurs: any[] = [
    { id: 1, name: 'Abou', speciality: 'Rafistolleur', rating: "Bingervile", image: './images/toclo-toclo.jpg' },
    { id: 2, name: 'Ali', speciality: 'Rafistolleur', rating: "Cocody", image: './images/toclo-toclo.jpg' },
    { id: 3, name: 'Akmel', speciality: 'Rafitolleur', rating: "Abobo", image: './images/toclo-toclo.jpg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    // Implémentez la logique de recherche ici
    console.log('Recherche pour:', this.searchTerm);
  }

  commander(rafistolleurId: number) {
    // Implémentez la logique de commande ici
    console.log('Commande pour le rafistolleur:', rafistolleurId);
  }

  logout() {
    // Implémentez la logique de déconnexion ici
    console.log('Déconnexion');
  }
}
