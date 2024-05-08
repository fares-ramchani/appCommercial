import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFournisseurComponent } from './gestionFournisseurs/registration-fournisseur/registration-fournisseur.component';
import { RegistrationFournisseurAutresComponent } from './gestionFournisseurs/registration-fournisseur-autres/registration-fournisseur-autres.component';
import { RegistrationFournisseurFicheComponent } from './gestionFournisseurs/registration-fournisseur-fiche/registration-fournisseur-fiche.component';
import { RegistrationFournisseurMemoComponent } from './gestionFournisseurs/registration-fournisseur-memo/registration-fournisseur-memo.component';
import { NavBarComponent } from './composants/nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/guard-authentification.guard';
import { RegistrationclientComponent } from './gestionclient/registrationclient/registrationclient.component';
import { RegistrationclientAutreComponent } from './gestionclient/registrationclient-autre/registrationclient-autre.component';
import { RegistrationclientFicheComponent } from './gestionclient/registrationclient-fiche/registrationclient-fiche.component';
import { RegistrationclientMemoComponent } from './gestionclient/registrationclient-memo/registrationclient-memo.component';
import { RegistrationmagasinComponent } from './gestionMagasins/registrationmagasin/registrationmagasin.component';

const routes: Routes = [
  {path :"RegistrationFournisseur" , component: RegistrationFournisseurComponent
  ,children:[
    {path :"RegistrationFournisseurAutres" , component: RegistrationFournisseurAutresComponent},
    {path :"RegistrationFournisseurFiche" , component: RegistrationFournisseurFicheComponent},
    {path :"RegistrationFournisseurMemo" , component: RegistrationFournisseurMemoComponent},
  ]},
  {path :"Registrationclient" , component: RegistrationclientComponent
  ,children:[
    {path :"RegistrationclientAutre" , component: RegistrationclientAutreComponent},
    {path :"RegistrationclientFiche" , component: RegistrationclientFicheComponent},
    {path :"RegistrationclientMemo" , component: RegistrationclientMemoComponent},
  ]},
  {path :"Registrationmagasin" ,component:RegistrationmagasinComponent},
  {path :"" , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
