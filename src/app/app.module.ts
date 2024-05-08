import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFournisseurComponent } from './gestionFournisseurs/registration-fournisseur/registration-fournisseur.component';
import { RegistrationFournisseurFicheComponent } from './gestionFournisseurs/registration-fournisseur-fiche/registration-fournisseur-fiche.component';
import { RegistrationFournisseurMemoComponent } from './gestionFournisseurs/registration-fournisseur-memo/registration-fournisseur-memo.component';
import { RegistrationFournisseurAutresComponent } from './gestionFournisseurs/registration-fournisseur-autres/registration-fournisseur-autres.component';
import { SideBarOptionComponent } from './composants/side-bar-option/side-bar-option.component';
import { ImprimerComponent } from './gestionFournisseurs/imprimer/imprimer.component';
import { NavBarComponent } from './composants/nav-bar/nav-bar.component';
import { SideBarnavigatioComponent } from './composants/side-barnavigatio/side-barnavigatio.component';
import { ClickoutSideBarNavigationDirective } from './derectives/clickout-side-bar-navigation.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { loginReducer } from './ngrx/ngrxLogin/login.reducer';
import { loginEffects } from './ngrx/ngrxLogin/login.effects';
import { SuprimerFournisseurComponent } from './gestionFournisseurs/suprimer-fournisseur/suprimer-fournisseur.component';
import { AppHttpInterceptor } from './interceptor/app-http.interceptor';
import { fournisseurReducer, fournisseurSaveReducer } from './ngrx/ngrxfournisseur/fournisseur.reducer';
import { fournisseurEffect } from './ngrx/ngrxfournisseur/fournisseur.effects';
import {MatPaginatorModule} from "@angular/material/paginator";
import { RechercherFournisseurComponent } from './gestionFournisseurs/rechercher-fournisseur/rechercher-fournisseur.component';
import { RegistrationclientComponent } from './gestionclient/registrationclient/registrationclient.component';
import { RegistrationclientFicheComponent } from './gestionclient/registrationclient-fiche/registrationclient-fiche.component';
import { RegistrationclientMemoComponent } from './gestionclient/registrationclient-memo/registrationclient-memo.component';
import { RegistrationclientAutreComponent } from './gestionclient/registrationclient-autre/registrationclient-autre.component';
import { SupprimerclientComponent } from './gestionclient/supprimerclient/supprimerclient.component';
import { RechercherclientComponent } from './gestionclient/rechercherclient/rechercherclient.component';
import { ImprimerclientComponent } from './gestionclient/imprimerclient/imprimerclient.component';
import { RechercheMagasinComponent } from './gestionMagasins/recherche-magasin/recherche-magasin.component';
import { ImprimermagasinComponent } from './gestionMagasins/imprimermagasin/imprimermagasin.component';
import { SupprimermagasinComponent } from './gestionMagasins/supprimermagasin/supprimermagasin.component';
import { RegistrationmagasinComponent } from './gestionMagasins/registrationmagasin/registrationmagasin.component'

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFournisseurComponent,
    RegistrationFournisseurFicheComponent,
    RegistrationFournisseurMemoComponent,
    RegistrationFournisseurAutresComponent,
    SideBarOptionComponent,
    ImprimerComponent,
    NavBarComponent,
    SideBarnavigatioComponent,
    ClickoutSideBarNavigationDirective,
    LoginComponent,
    SuprimerFournisseurComponent,
    RechercherFournisseurComponent,
    RegistrationclientComponent,
    RegistrationclientFicheComponent,
    RegistrationclientMemoComponent,
    RegistrationclientAutreComponent,
    SupprimerclientComponent,
    RechercherclientComponent,
    ImprimerclientComponent,
    RechercheMagasinComponent,
    ImprimermagasinComponent,
    SupprimermagasinComponent,
    RegistrationmagasinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    StoreModule.forRoot({loginReducer:loginReducer,fournisseurReducer:fournisseurReducer,
      fournisseurSaveReducer:fournisseurSaveReducer}),
    EffectsModule.forRoot([loginEffects,fournisseurEffect]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [   
  {provide : HTTP_INTERCEPTORS , useClass : AppHttpInterceptor , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
