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
import { ShowComposantsupprimermagasinService } from 'src/app/services/show-composantsupprimermagasin.service';
import { ShowComposantrecherchermagasinService } from 'src/app/services/show-composantrecherchermagasin.service';
import { ShowComposantimprimermagasinService } from 'src/app/services/show-composantimprimermagasin.service';
import { ShowComposantimprimerfamilleService } from 'src/app/services/show-composantimprimerfamille.service';
import { ShowComposantrecherchefamilleService } from 'src/app/services/show-composantrecherchefamille.service';
import { ShowComposantsupprimerfamilleService } from 'src/app/services/show-composantsupprimerfamille.service';
import { clientState, clientStateEnume } from 'src/app/ngrx/ngrxclient/client.reducer';
import { SaveclientActions } from 'src/app/ngrx/ngrxclient/client.actions';
import { magasin } from 'src/app/model/magasin.model';
import { ServiceMagasinService } from 'src/app/services/service-magasin.service';
import { magasinState, magasinStateEnume } from 'src/app/ngrx/ngrxmagasin/magasin.reducer';
import { SavemagasinActions } from 'src/app/ngrx/ngrxmagasin/magasin.action';

@Component({
  selector: 'app-side-bar-option',
  templateUrl: './side-bar-option.component.html',
  styleUrls: ['./side-bar-option.component.css']
})
export class SideBarOptionComponent {
 urlactuell:any
  fournisseurData: fournisseurComplete | null = null;
  clientData: clientComplete | null = null;
  magasinData: magasin | null = null;
  FounisseurState$:Observable<fournisseurState> | null=null;
  readonly fournisseurStateEnume=fournisseurStateEnume;
  clientState$:Observable<clientState> | null=null;
  readonly clientStateEnume=clientStateEnume;
  magasinState$:Observable<magasinState> | null=null;
  readonly magasinStateEnume=magasinStateEnume;
  constructor(private store:Store<any>, private ServicefournisseurService: ServicefournisseurService, 
    private ShowComposantsurprimmerFornisseurService: ShowComposantsurprimmerFornisseurService,
     private ShowComposantImprimerFornisseurService: ShowComposantImprimerFornisseurService,
    private ShowComposantrechercherFornisseurService:ShowComposantrechercherFornisseurService,
    private ShowComposantimprimerclientService:ShowComposantimprimerclientService,
    private ShowComposantsupprimerclientService: ShowComposantsupprimerclientService,
    private ShowComposantrechercherclientService:ShowComposantrechercherclientService,
    private ServiceclientService:ServiceclientService,
    private ServiceMagasinService:ServiceMagasinService,
    private ShowComposantsupprimermagasinService:ShowComposantsupprimermagasinService,
    private ShowComposantrecherchermagasinService: ShowComposantrecherchermagasinService,
    private ShowComposantimprimermagasinService:ShowComposantimprimermagasinService,
    private ShowComposantimprimerfamilleService: ShowComposantimprimerfamilleService,
    private ShowComposantrecherchefamilleService: ShowComposantrecherchefamilleService,
    private ShowComposantsupprimerfamilleService: ShowComposantsupprimerfamilleService,
    
    private router: Router) { }

  closepopup() {
    if (this.urlactuell.startsWith("/RegistrationFournisseur")){
      this.ShowComposantImprimerFornisseurService.setshowpopup();
    }else if(this.urlactuell.startsWith("/Registrationclient")){
      this.ShowComposantimprimerclientService.setshowpopup();

    }else if(this.urlactuell.startsWith("/Registrationmagasin")){
      this.ShowComposantimprimermagasinService.setshowpopup();

    }
    else if(this.urlactuell.startsWith("/Registrationfamilles")){
      this.ShowComposantimprimerfamilleService.setshowpopup();

    }

  }
  closepopupsupprimer() {
    if (this.urlactuell.startsWith("/RegistrationFournisseur")){
      this.ShowComposantsurprimmerFornisseurService.setshowpopup();
    }else if(this.urlactuell.startsWith("/Registrationclient")){
      this.ShowComposantsupprimerclientService.setshowpopup();

    }else if(this.urlactuell.startsWith("/Registrationmagasin")){
      this.ShowComposantsupprimermagasinService.setshowpopup();

    }else if(this.urlactuell.startsWith("/Registrationfamilles")){
      this.ShowComposantsupprimerfamilleService.setshowpopup();

    }

  }
  closepopuprechercher() {
    if (this.urlactuell.startsWith("/RegistrationFournisseur") ){
      this.ShowComposantrechercherFornisseurService.setshowpopup();
    }else if(this.urlactuell.startsWith("/Registrationclient")){
      this.ShowComposantrechercherclientService.setshowpopup();

    }else if(this.urlactuell.startsWith("/Registrationmagasin")){
      this.ShowComposantrecherchermagasinService.setshowpopup();

    }else if(this.urlactuell.startsWith("/Registrationfamilles")){
      this.ShowComposantrecherchefamilleService.setshowpopup();

    }
  
  }
  fournisseurData4() {
    if (this.urlactuell.startsWith("/RegistrationFournisseur")){
      const data = this.fournisseurData
      const formattedData = { ...data?.fournisseur, ...data }
      const { fournisseur, ...other } = formattedData
      this.store.dispatch(new SavefournisseurActions(other));
    }else if (this.urlactuell.startsWith("/Registrationclient")) {
      const data = this.clientData
      const formattedData = { ...data?.client, ...data }
      const { client, ...other } = formattedData
      this.store.dispatch(new SaveclientActions(other));

    }
    else if (this.urlactuell.startsWith("/Registrationmagasin")) {
      // const data = this.magasinData
      // const formattedData = { ...data?.client, ...data }
      // const { client, ...other } = formattedData
      this.store.dispatch(new SavemagasinActions(this.magasinData));
    

    }
  
  }
  ngOnInit(): void {
     this.urlactuell = this.router.url;
    if (this.urlactuell.startsWith("/RegistrationFournisseur")) {
      this.FounisseurState$=this.store.pipe(
        map((state)=>state.fournisseurSaveReducer )
      )
      this.ServicefournisseurService.fournisseurCompletteData$.subscribe(data => {
        this.fournisseurData = data;
      });
    }
    else if (this.urlactuell.startsWith("/Registrationclient")) {
      this.clientState$=this.store.pipe(
        map((state)=>state.clientSaveReducer )
      )
      this.ServiceclientService.clientCompleteData$.subscribe(data => {
        this.clientData = data;
      });
    }
    else if (this.urlactuell.startsWith("/Registrationmagasin")) {
      this.magasinState$=this.store.pipe(
        map((state)=>state.magasinSaveReducer )
      )
      this.ServiceMagasinService.magasinData$.subscribe(data => {
        this.magasinData = data;
      });
    }
   
  }

}
