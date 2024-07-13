import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {

  

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }




}
