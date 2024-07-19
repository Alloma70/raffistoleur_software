// src/app/register/register.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nom: string = '';
  prenom: string = '';
  contact: string = '';
  quartier: string = '';
  statut: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const userData = {
      nom: this.nom,
      prenom: this.prenom,
      contact: this.contact,
      quartier: this.quartier,
      statut: this.statut,
      email: this.email,
      password: this.password
    };
  
    this.http.post<any>('http://localhost:8000/api/register', userData)
      .subscribe({
        next: (response: any) => {
          localStorage.setItem('token', response.access_token);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Registration failed', error);
        }
      });
  }
}
