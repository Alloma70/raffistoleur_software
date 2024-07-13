import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AboutComponent } from './about/about.component';
import { RafistolleurComponent } from './rafistolleur/rafistolleur.component';
import { RechercherComponent } from './rechercher/rechercher.component';
import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';

export const routes: Routes = [
    { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
    { path: 'acceuil', component: AcceuilComponent },
    { path: 'about', component: AboutComponent },
    { path: 'rafistolleur', component: RafistolleurComponent },
    { path: 'rechercher', component: RechercherComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'connexion', component: ConnexionComponent }
];
