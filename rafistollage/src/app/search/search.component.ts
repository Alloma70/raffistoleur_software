// src/app/search/search.component.ts
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  quartier: string = '';
  rafistolleurs: any[] = [];

  constructor(private http: HttpClient) {}

  onSearch() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    this.http.get(`http://localhost:8000/api/search?quartier=${this.quartier}`, { headers })
      .subscribe({
        next: (response: any) => {
          this.rafistolleurs = response;
        },
        error: (error) => {
          console.error('Recherche echoué', error);
        }
      });
  }
  
}