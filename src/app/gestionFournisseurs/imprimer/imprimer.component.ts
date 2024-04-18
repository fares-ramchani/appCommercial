import { Component } from '@angular/core';
import { ShowComposantImprimerFornisseurService } from 'src/app/services/show-composant-imprimer-fornisseur.service';

@Component({
  selector: 'app-imprimer',
  templateUrl: './imprimer.component.html',
  styleUrls: ['./imprimer.component.css']
})
export class ImprimerComponent {
  constructor(private ShowComposantImprimerFornisseurService:ShowComposantImprimerFornisseurService){}
  closepopup() {
    this.ShowComposantImprimerFornisseurService.setshowpopup();
   
  }

}
