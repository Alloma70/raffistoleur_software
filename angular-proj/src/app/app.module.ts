import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { routes } from './routes'; // Assurez-vous d'importer les routes correctement

@NgModule({
  declarations: [
    AppComponent,
    // Déclarez ici tous les composants utilisés dans les routes
    AcceuilComponent,
    AboutComponent,
    RafistolleurComponent,
    RechercherComponent,
    ContactComponent,
    InscriptionComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes) // Configurez les routes principales ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
