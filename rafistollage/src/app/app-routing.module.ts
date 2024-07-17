import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ajout de la virgule après 'login'
  { path: 'login', component: LoginComponent },
  { path:'**', redirectTo: 'login'}// Utilisation correcte de LoginComponent sans guillemets
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
