import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { fournisseurComplete } from 'src/app/model/fournisseurComplete.model';
import { SavefournisseurActions } from 'src/app/ngrx/ngrxfournisseur/fournisseur.actions';
import { fournisseurState, fournisseurStateEnume } from 'src/app/ngrx/ngrxfournisseur/fournisseur.reducer';
import { ServicefournisseurService } from 'src/app/services/servicefournisseur.service';
import { ShowComposantImprimerFornisseurService } from 'src/app/services/show-composant-imprimer-fornisseur.service';
import { ShowComposantimprimerclientService } from 'src/app/services/show-composantimprimerclient.service';
import { ShowComposantrechercherFornisseurService } from 'src/app/services/show-composantrechercher-fornisseur.service';
import { ShowComposantsurprimmerFornisseurService } from 'src/app/services/show-composantsurprimmer-fornisseur.service';
import { ShowComposantsupprimerclientService } from 'src/app/services/show-composantsupprimerclient.service';
import { ServiceclientService } from 'src/app/services/serviceclient.service';
import { clientComplete } from 'src/app/model/clientComplete.model';
import { ShowComposantrechercherclientService } from 'src/app/services/show-composantrechercherclient.service';

@Component({
  selector: 'app-side-bar-option',
  templateUrl: './side-bar-option.component.html',
  styleUrls: ['./side-bar-option.component.css']
})
export class SideBarOptionComponent {
 urlactuell:any
  fournisseurData: fournisseurComplete | null = null;
  clientData: clientComplete | null = null;
  FounisseurState$:Observable<fournisseurState> | null=null;
  readonly fournisseurStateEnume=fournisseurStateEnume;
  constructor(private store:Store<any>, private ServicefournisseurService: ServicefournisseurService, 
    private ShowComposantsurprimmerFornisseurService: ShowComposantsurprimmerFornisseurService,
     private ShowComposantImprimerFornisseurService: ShowComposantImprimerFornisseurService,
    private ShowComposantrechercherFornisseurService:ShowComposantrechercherFornisseurService,
    private ShowComposantimprimerclientService:ShowComposantimprimerclientService,
    private ShowComposantsupprimerclientService: ShowComposantsupprimerclientService,
    private ShowComposantrechercherclientService:ShowComposantrechercherclientService,
    private ServiceclientService:ServiceclientService,
    private router: Router) { }

  closepopup() {
    if (this.urlactuell.startsWith("/RegistrationFournisseur")){
      this.ShowComposantImprimerFornisseurService.setshowpopup();
    }else if(this.urlactuell.startsWith("/Registrationclient")){
      this.ShowComposantimprimerclientService.setshowpopup();

    }

  }
  closepopupsupprimer() {
    if (this.urlactuell.startsWith("/RegistrationFournisseur")){
      this.ShowComposantsurprimmerFornisseurService.setshowpopup();
    }else if(this.urlactuell.startsWith("/Registrationclient")){
      this.ShowComposantsupprimerclientService.setshowpopup();

    }

  }
  closepopuprechercher() {
    if (this.urlactuell.startsWith("/RegistrationFournisseur") ){
      this.ShowComposantrechercherFornisseurService.setshowpopup();
    }else if(this.urlactuell.startsWith("/Registrationclient")){
      this.ShowComposantrechercherclientService.setshowpopup();

    }
  
  }
  fournisseurData4() {
    // console.log(...this.fournisseurData);
    if (this.urlactuell.startsWith("/RegistrationFournisseur")){
      const data = this.fournisseurData
      const formattedData = { ...data?.fournisseur, ...data }
      const { fournisseur, ...other } = formattedData
      this.store.dispatch(new SavefournisseurActions(other));
    }else if (this.urlactuell.startsWith("/Registrationclient")) {
      const data = this.clientData
      const formattedData = { ...data?.client, ...data }
      const { client, ...other } = formattedData
      //this.store.dispatch(new SavefournisseurActions(other));

    }
  
  }
  ngOnInit(): void {
     this.urlactuell = this.router.url;
     console.log("urlactuel:",this.urlactuell)
    if (this.urlactuell.startsWith("/RegistrationFournisseur")) {
      this.FounisseurState$=this.store.pipe(
        map((state)=>state.fournisseurSaveReducer )
      )
      // Abonnez-vous aux changements des données partagées
      this.ServicefournisseurService.fournisseurCompletteData$.subscribe(data => {
        this.fournisseurData = data;
      });
    }
    else if (this.urlactuell.startsWith("/Registrationclient")) {
      
      // Abonnez-vous aux changements des données partagées
      this.ServiceclientService.clientCompleteData$.subscribe(data => {
        this.clientData = data;
      });
    }
   
  }

}
