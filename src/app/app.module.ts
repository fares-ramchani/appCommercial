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
import { fournisseurReducer, fournisseurSaveReducer, fournisseurimprimerReducer } from './ngrx/ngrxfournisseur/fournisseur.reducer';
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
import { RegistrationmagasinComponent } from './gestionMagasins/registrationmagasin/registrationmagasin.component';
import { ModepaiementComponent } from './gestionpaiement/modepaiement/modepaiement.component';
import { RegistrationfamillesComponent } from './gestionFamilles/registrationfamilles/registrationfamilles.component';
import { RecherchefamillesComponent } from './gestionFamilles/recherchefamilles/recherchefamilles.component';
import { ImprimerfamillesComponent } from './gestionFamilles/imprimerfamilles/imprimerfamilles.component';
import { SupprimerfamillesComponent } from './gestionFamilles/supprimerfamilles/supprimerfamilles.component'
import { clientReducer, clientSaveReducer, clientimprimerReducer } from './ngrx/ngrxclient/client.reducer';
import { clientEffect } from './ngrx/ngrxclient/client.effects';
import { magasinReducer, magasinSaveReducer, magasinimprimerReducer } from './ngrx/ngrxmagasin/magasin.reducer';
import { magasinEffect } from './ngrx/ngrxmagasin/magasin.effects';
import { familleReducer, familleSaveReducer, familleimprimerReducer } from './ngrx/ngrxfamille/famille.reducer';
import { familleEffect } from './ngrx/ngrxfamille/famille.effects';
import { MenuPrincipaleComponent } from './composants/menu-principale/menu-principale.component';
import { AlertsSuprimerComponent } from './composants/alerts/alerts-suprimer/alerts-suprimer.component';
import { AlertsModifierComponent } from './composants/alerts/alerts-modifier/alerts-modifier.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { timeout } from 'rxjs';

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
    RegistrationmagasinComponent,
    ModepaiementComponent,
    RegistrationfamillesComponent,
    RecherchefamillesComponent,
    ImprimerfamillesComponent,
    SupprimerfamillesComponent,
    MenuPrincipaleComponent,
    AlertsSuprimerComponent,
    AlertsModifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    StoreModule.forRoot({loginReducer:loginReducer,fournisseurReducer:fournisseurReducer,
      fournisseurSaveReducer:fournisseurSaveReducer,clientSaveReducer:clientSaveReducer
        ,clientReducer:clientReducer,fournisseurimprimerReducer:fournisseurimprimerReducer,
        clientimprimerReducer:clientimprimerReducer,magasinReducer:magasinReducer,
        magasinSaveReducer:magasinSaveReducer,magasinimprimerReducer:magasinimprimerReducer,
        familleReducer:familleReducer,familleSaveReducer:familleSaveReducer,familleimprimerReducer:familleimprimerReducer}),
    EffectsModule.forRoot([loginEffects,fournisseurEffect,clientEffect,magasinEffect,familleEffect]),
    StoreDevtoolsModule.instrument(),
    ToastrModule.forRoot({timeOut:4000,
      progressBar:true,progressAnimation:'increasing'}
    
    ),
    BrowserAnimationsModule
  ],
  providers: [   
  {provide : HTTP_INTERCEPTORS , useClass : AppHttpInterceptor , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
