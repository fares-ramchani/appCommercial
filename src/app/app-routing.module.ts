import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFournisseurComponent } from './gestionFournisseurs/registration-fournisseur/registration-fournisseur.component';
import { RegistrationFournisseurAutresComponent } from './gestionFournisseurs/registration-fournisseur-autres/registration-fournisseur-autres.component';
import { RegistrationFournisseurFicheComponent } from './gestionFournisseurs/registration-fournisseur-fiche/registration-fournisseur-fiche.component';
import { RegistrationFournisseurMemoComponent } from './gestionFournisseurs/registration-fournisseur-memo/registration-fournisseur-memo.component';
import { NavBarComponent } from './composants/nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path :"RegistrationFournisseur" , component: RegistrationFournisseurComponent,children:[
    {path :"RegistrationFournisseurAutres" , component: RegistrationFournisseurAutresComponent},
    {path :"RegistrationFournisseurFiche" , component: RegistrationFournisseurFicheComponent},
    {path :"RegistrationFournisseurMemo" , component: RegistrationFournisseurMemoComponent},
  ]},
  {path :"" , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
