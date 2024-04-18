import { Component } from '@angular/core';
import { fournisseur } from 'src/app/model/fournisseur.model';
import { fournisseurComplete } from 'src/app/model/fournisseurComplete.model';
import { ServicefournisseurService } from 'src/app/services/servicefournisseur.service';
import { ShowComposantImprimerFornisseurService } from 'src/app/services/show-composant-imprimer-fornisseur.service';
import { ShowComposantsurprimmerFornisseurService } from 'src/app/services/show-composantsurprimmer-fornisseur.service';

@Component({
  selector: 'app-side-bar-option',
  templateUrl: './side-bar-option.component.html',
  styleUrls: ['./side-bar-option.component.css']
})
export class SideBarOptionComponent {
  fournisseurData: fournisseurComplete | null = null;
  constructor(private ServicefournisseurService:ServicefournisseurService,private ShowComposantsurprimmerFornisseurService:ShowComposantsurprimmerFornisseurService, private ShowComposantImprimerFornisseurService:ShowComposantImprimerFornisseurService){}
  
  closepopup() {
    this.ShowComposantImprimerFornisseurService.setshowpopup();
  }
  closepopupsupprimer() {
    this.ShowComposantsurprimmerFornisseurService.setshowpopup();
  }
  fournisseurData4(){
    console.log(this.fournisseurData);
  }
  ngOnInit(): void {
    // Abonnez-vous aux changements des données partagées
    this.ServicefournisseurService.fournisseurCompletteData$.subscribe(data => {
      this.fournisseurData = data;
    });
  }

}
