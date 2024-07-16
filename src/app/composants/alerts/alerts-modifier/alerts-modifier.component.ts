import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { getclientbycodesActions, modifierclientActions } from 'src/app/ngrx/ngrxclient/client.actions';
import { getfamillebycodesActions, modifierfamilleActions } from 'src/app/ngrx/ngrxfamille/famille.action';
import { getfournisseurbycodesActions, modifierfournisseurActions } from 'src/app/ngrx/ngrxfournisseur/fournisseur.actions';
import { getmagasinbycodesActions, modifiermagasinActions } from 'src/app/ngrx/ngrxmagasin/magasin.action';
import { ShowComposantAlertmodifierService } from 'src/app/services/show-composant-alertmodifier.service';

@Component({
  selector: 'app-alerts-modifier',
  templateUrl: './alerts-modifier.component.html',
  styleUrls: ['./alerts-modifier.component.css']
})
export class AlertsModifierComponent {
  urlActuele:string=""
  motcle:string=""
  constructor(private router: Router,private store: Store<any>, private ShowComposantAlertmodifierService:ShowComposantAlertmodifierService,
    private toastr:ToastrService
  ) { }
  ngOnInit(): void {
    this.urlActuele=this.router.url
    if(this.urlActuele.startsWith("/RegistrationFournisseur")){
      this.motcle="Fournisseur"
    }else if(this.urlActuele.startsWith("/Registrationclient")){
      this.motcle="client"
    } else if (this.urlActuele.startsWith("/Registrationmagasin")){
      this.motcle="magasin"
    } else if (this.urlActuele.startsWith("/Registrationfamilles")){
      this.motcle="famille"
    }
    
  }

  suprimerfournisseur(){
    if(this.urlActuele.startsWith("/RegistrationFournisseur")){
      
      this.store.dispatch(new modifierfournisseurActions(this.ShowComposantAlertmodifierService.getsharedata()));
      this.store.dispatch(new getfournisseurbycodesActions(this.ShowComposantAlertmodifierService.getsharedata().code));
    }
    else if(this.urlActuele.startsWith("/Registrationclient")){
      this.store.dispatch(new modifierclientActions(this.ShowComposantAlertmodifierService.getsharedata()));
    this.store.dispatch(new getclientbycodesActions(this.ShowComposantAlertmodifierService.getsharedata().code));
   
    }else if(this.urlActuele.startsWith("/Registrationmagasin")){
      this.store.dispatch(new modifiermagasinActions(this.ShowComposantAlertmodifierService.getsharedata()));
      this.store.dispatch(new getmagasinbycodesActions(this.ShowComposantAlertmodifierService.getsharedata().store))


    }else if (this.urlActuele.startsWith("/Registrationfamilles")){
      this.store.dispatch(new modifierfamilleActions(this.ShowComposantAlertmodifierService.getsharedata()));
      this.store.dispatch(new getfamillebycodesActions(this.ShowComposantAlertmodifierService.getsharedata().code));


    }
    this.ShowComposantAlertmodifierService.setshowpopup()

  }
  annulerSuprimerFounisseur(){
    this.ShowComposantAlertmodifierService.setshowpopup()
  }

}
