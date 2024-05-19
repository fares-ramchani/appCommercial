import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { donnerImprimer } from 'src/app/model/donnerImprimer.model';
import { imprimerfournisseurActions, inisialfournisseurActions } from 'src/app/ngrx/ngrxfournisseur/fournisseur.actions';
import { fournisseurState, fournisseurStateEnume } from 'src/app/ngrx/ngrxfournisseur/fournisseur.reducer';
import { ServicefournisseurService } from 'src/app/services/servicefournisseur.service';
import { ShowComposantImprimerFornisseurService } from 'src/app/services/show-composant-imprimer-fornisseur.service';

@Component({
  selector: 'app-imprimer',
  templateUrl: './imprimer.component.html',
  styleUrls: ['./imprimer.component.css']
})
export class ImprimerComponent {
  fournisseurState$: Observable<fournisseurState> | null = null;
  readonly fournisseurStateEnume = fournisseurStateEnume;
  formImprimer!:FormGroup;
  imprimerrequest!:donnerImprimer
  donnerImprimer:any
  sortQuery:any
  page:number=1
  constructor(private ShowComposantImprimerFornisseurService:ShowComposantImprimerFornisseurService,
    private fb : FormBuilder,
    private ServicefournisseurService:ServicefournisseurService,
    private store: Store<any>
  ){}
  closepopup() {
    this.ShowComposantImprimerFornisseurService.setshowpopup();
    this.store.dispatch(new inisialfournisseurActions("inisiale state"));
   
    this.page=1
   
  }
  ngOnInit()
{
  this.fournisseurState$ = this.store.pipe(
    map((state) => state.fournisseurimprimerReducer)
  )
  this.formImprimer=this.fb.group({
    code:this.fb.control(false),
    postalCode:this.fb.control(''),
    agent:this.fb.control(''),
    sortQuery:this.fb.control(''),
    fromCode:this.fb.control(Number),
    toCode:this.fb.control(Number),
    city:this.fb.control(''),
    country:this.fb.control(''),
    activity:this.fb.control(''),
    payment:this.fb.control(''),
    bank:this.fb.control(''),
    type:this.fb.control(''),
    nature:this.fb.control(''),
    banke:this.fb.control(''),
    isVATSubject:this.fb.control(''),
    isBlockedAccount:this.fb.control(''),
});

}
imprimer2(){
  window.print()
 
  
}
imprimer(){
  if(this.formImprimer.value.sortQuery=="code"){
    if(this.formImprimer.value.code==true){
      this.sortQuery={code:1}
    }else{
      this.sortQuery={code:1}
    }

  }
  else if(this.formImprimer.value.sortQuery=="postalCode"){
    if(this.formImprimer.value.code==true){
      this.sortQuery={postalCode:1,code:1}
    }else{
      this.sortQuery={postalCode:1}
    }

  }
  else if(this.formImprimer.value.sortQuery=="agent"){
    if(this.formImprimer.value.code==true){
      this.sortQuery={agent:1,code:1}
    }else{
      this.sortQuery={agent:1}
    }

  }
  else if(this.formImprimer.value.sortQuery=="city"){
    if(this.formImprimer.value.code==true){
      this.sortQuery={city:1,code:1}
    }else{
      this.sortQuery={city:1}
    }

  }
  else if(this.formImprimer.value.sortQuery=="country"){
    if(this.formImprimer.value.code==true){
      this.sortQuery={country:1,code:1}
    }else{
      this.sortQuery={country:1}
    }

  }
  else if(this.formImprimer.value.sortQuery=="activity"){
    if(this.formImprimer.value.code==true){
      this.sortQuery={activity:1,code:1}
    }else{
      this.sortQuery={activity:1}
    }

  }
  else if(this.formImprimer.value.sortQuery=="payment"){
    if(this.formImprimer.value.code==true){
      this.sortQuery={payment:1,code:1}
    }else{
      this.sortQuery={payment:1}
    }

  }
  else if(this.formImprimer.value.sortQuery=="bank"){
    if(this.formImprimer.value.code==true){
      this.sortQuery={bank:1,code:1}
    }else{
      this.sortQuery={bank:1}
    }

  }
  else if(this.formImprimer.value.sortQuery=="nature"){
    if(this.formImprimer.value.code==true){
      this.sortQuery={nature:1,code:1}
    }else{
      this.sortQuery={nature:1}
    }

  }
  else if(this.formImprimer.value.sortQuery=="isVATSubject"){
    if(this.formImprimer.value.code==true){
      this.sortQuery={isVATSubject:1,code:1}
    }else{
      this.sortQuery={isVATSubject:1}
    }

  }
  else if(this.formImprimer.value.sortQuery=="isBlockedAccount"){
    if(this.formImprimer.value.code==true){
      this.sortQuery={isBlockedAccount:1,code:1}
    }else{
      this.sortQuery={isBlockedAccount:1}
    }

  }

  this.imprimerrequest=this.formImprimer.value
  this.imprimerrequest.sortQuery=this.sortQuery

//   this.ServicefournisseurService.getdonnerImprimer(this.imprimerrequest).subscribe({next :data=>{
// this.donnerImprimer=data.data.suppliers

//   }})
  this.store.dispatch(new imprimerfournisseurActions(this.imprimerrequest));
 
  this.page=2 
 
 
}



}


