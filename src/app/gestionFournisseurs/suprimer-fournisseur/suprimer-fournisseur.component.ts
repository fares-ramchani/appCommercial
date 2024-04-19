import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { paginationParamter } from 'src/app/model/paginationParamter.model';
import { fournisseurState, fournisseurStateEnume } from 'src/app/ngrx/ngrxfournisseur/fournisseur.reducer';
import { ServicefournisseurService } from 'src/app/services/servicefournisseur.service';
import { ShowComposantsurprimmerFornisseurService } from 'src/app/services/show-composantsurprimmer-fornisseur.service';
import { Store } from '@ngrx/store';
import { DeletefournisseursActions, GetAllfournisseurActions } from 'src/app/ngrx/ngrxfournisseur/fournisseur.actions';
@Component({
  selector: 'app-suprimer-fournisseur',
  templateUrl: './suprimer-fournisseur.component.html',
  styleUrls: ['./suprimer-fournisseur.component.css']
})
export class SuprimerFournisseurComponent {
  fournisseurState$:Observable<fournisseurState> | null=null;
  readonly fournisseurStateEnume=fournisseurStateEnume;
  fournisseur : Array<any> = [];
  paginationParamter:paginationParamter={perPage:6,page:1}
  constructor(private store:Store<any>,private ServicefournisseurService:ServicefournisseurService,private ShowComposantsurprimmerFornisseurService:ShowComposantsurprimmerFornisseurService){}
  ngOnInit() {
    this.getfournisseurParpagination()
    this.fournisseurState$=this.store.pipe(
      map((state)=>state.fournisseurReducer )
    )
 }
 
  closepopup() {
    this.ShowComposantsurprimmerFornisseurService.setshowpopup();
   
  }
  getfournisseurParpagination(){

    this.store.dispatch(new GetAllfournisseurActions(this.paginationParamter));
  }


  
  deleteFournisseurByCode(codeFournisseur:number){
    if(confirm("Êtes-vous sûr de supprimer cette borne ?")){
    
        this.store.dispatch(new DeletefournisseursActions(codeFournisseur))
      }
      
    }
    

  searchText=""
}