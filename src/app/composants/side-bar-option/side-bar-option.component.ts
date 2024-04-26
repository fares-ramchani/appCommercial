import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { fournisseurComplete } from 'src/app/model/fournisseurComplete.model';
import { SavefournisseurActions } from 'src/app/ngrx/ngrxfournisseur/fournisseur.actions';
import { fournisseurState, fournisseurStateEnume } from 'src/app/ngrx/ngrxfournisseur/fournisseur.reducer';
import { ServicefournisseurService } from 'src/app/services/servicefournisseur.service';
import { ShowComposantImprimerFornisseurService } from 'src/app/services/show-composant-imprimer-fornisseur.service';
import { ShowComposantrechercherFornisseurService } from 'src/app/services/show-composantrechercher-fornisseur.service';
import { ShowComposantsurprimmerFornisseurService } from 'src/app/services/show-composantsurprimmer-fornisseur.service';

@Component({
  selector: 'app-side-bar-option',
  templateUrl: './side-bar-option.component.html',
  styleUrls: ['./side-bar-option.component.css']
})
export class SideBarOptionComponent {
 
  fournisseurData: fournisseurComplete | null = null;
  FounisseurState$:Observable<fournisseurState> | null=null;
  readonly fournisseurStateEnume=fournisseurStateEnume;
  constructor(private store:Store<any>, private ServicefournisseurService: ServicefournisseurService, 
    private ShowComposantsurprimmerFornisseurService: ShowComposantsurprimmerFornisseurService,
     private ShowComposantImprimerFornisseurService: ShowComposantImprimerFornisseurService,
    private ShowComposantrechercherFornisseurService:ShowComposantrechercherFornisseurService) { }

  closepopup() {
    this.ShowComposantImprimerFornisseurService.setshowpopup();
  }
  closepopupsupprimer() {
    this.ShowComposantsurprimmerFornisseurService.setshowpopup();
  }
  closepopuprechercher() {
    this.ShowComposantrechercherFornisseurService.setshowpopup();
  }
  fournisseurData4() {
    // console.log(...this.fournisseurData);
    const data = this.fournisseurData
    const formattedData = { ...data?.fournisseur, ...data }
    const { fournisseur, ...other } = formattedData
    this.store.dispatch(new SavefournisseurActions(other));
  }
  ngOnInit(): void {
    this.FounisseurState$=this.store.pipe(
      map((state)=>state.fournisseurSaveReducer )
    )
    // Abonnez-vous aux changements des données partagées
    this.ServicefournisseurService.fournisseurCompletteData$.subscribe(data => {
      this.fournisseurData = data;
    });
  }

}
