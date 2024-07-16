import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DeleteclientsActions } from 'src/app/ngrx/ngrxclient/client.actions';
import { DeletefamilleActions } from 'src/app/ngrx/ngrxfamille/famille.action';
import { DeletefournisseursActions } from 'src/app/ngrx/ngrxfournisseur/fournisseur.actions';
import { DeletemagasinsActions } from 'src/app/ngrx/ngrxmagasin/magasin.action';
import { ShowComposantAlertsupprimerService } from 'src/app/services/show-composant-alertsupprimer.service';

@Component({
  selector: 'app-alerts-suprimer',
  templateUrl: './alerts-suprimer.component.html',
  styleUrls: ['./alerts-suprimer.component.css']
})
export class AlertsSuprimerComponent {
  urlActuele:string=""
  motcle:string=""
  constructor(private router: Router,private store: Store<any>, private ShowComposantAlertsupprimerService:ShowComposantAlertsupprimerService) { }
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
      this.store.dispatch(new DeletefournisseursActions( this.ShowComposantAlertsupprimerService.getsharedata()))
    }
    else if(this.urlActuele.startsWith("/Registrationclient")){
      this.store.dispatch(new DeleteclientsActions(this.ShowComposantAlertsupprimerService.getsharedata()))
    }else if(this.urlActuele.startsWith("/Registrationmagasin")){
      this.store.dispatch(new DeletemagasinsActions(this.ShowComposantAlertsupprimerService.getsharedata()))

    }else if (this.urlActuele.startsWith("/Registrationfamilles")){
      this.store.dispatch(new DeletefamilleActions(this.ShowComposantAlertsupprimerService.getsharedata()))

    }
    this.ShowComposantAlertsupprimerService.setshowpopup()

  }
  annulerSuprimerFounisseur(){
    this.ShowComposantAlertsupprimerService.setshowpopup()
  }

}
