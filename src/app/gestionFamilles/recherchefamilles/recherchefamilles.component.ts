import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { paramatrePaginationClient } from 'src/app/model/paramatrePaginationClient.model';
import { GetAllfamilletActions, getfamillebycodesActions, modifierfamilleActions } from 'src/app/ngrx/ngrxfamille/famille.action';
import { familleState, familleStateEnume, familleStateModifier } from 'src/app/ngrx/ngrxfamille/famille.reducer';
import { ParamatrePaginationClientService } from 'src/app/services/paramatre-pagination-client.service';
import { ShowComposantrecherchefamilleService } from 'src/app/services/show-composantrecherchefamille.service';

@Component({
  selector: 'app-recherchefamilles',
  templateUrl: './recherchefamilles.component.html',
  styleUrls: ['./recherchefamilles.component.css']
})
export class RecherchefamillesComponent {
  familleState$: Observable<familleState> | null = null;
  readonly familleStateEnume = familleStateEnume;
  familleStatemodifeir$: Observable<familleStateModifier> | null = null;
  readonly familletateEnumemodifier = familleStateEnume;
  famille:any={}
  totalfamille =3
  nombrefamilleDansUnPage = 11
  daitailleclient=0
  currentpage=1
  familleComplete: Array<any> = []
  paginationParamter: paramatrePaginationClient = { perPage: this.nombrefamilleDansUnPage, page:1 }
  constructor(private ParamatrePaginationService:ParamatrePaginationClientService, private store: Store<any>,
     private ShowComposantrecherchefamilleService: ShowComposantrecherchefamilleService,
     private fb: FormBuilder) {
      
      }
  ngOnDestroy() {
    this.famille={ }
  }
  ngOnInit() {
    this.familleState$ = this.store.pipe(
      map((state) => state.familleReducer)
    )
   
    
    this.getfamilleParpagination(this.paginationParamter)
  
  
    
  }


  closepopup() {
    this.ShowComposantrecherchefamilleService.setshowpopup();

  }
  getfamilleParpagination(paginationParamter: paramatrePaginationClient) {
    this. daitailleclient=0
    this.store.dispatch(new GetAllfamilletActions(paginationParamter));
  }
  getfamilleBycode(){
    this. daitailleclient=0
    this.store.dispatch(new getfamillebycodesActions(parseInt(this.searchText)));


  }
  showdaitaillefamille(codefamille:number){
    this. daitailleclient=1
    this.store.dispatch(new getfamillebycodesActions(codefamille));

  }
  showdaitaillefamilleupdate(codefamille:number){
    this. daitailleclient=2
    this.store.dispatch(new getfamillebycodesActions(codefamille));
   
    this.familleState$?.subscribe((state) => {
      if(state.four){
        this.code=state.four.code
        this.companyName =state.four.familyLabel
      }else{
        
        this.familleComplete = state?.famille.families;
        for(let fournisseur of this.familleComplete){
          if(fournisseur.code==codefamille){
            this.code=fournisseur.code
            this.companyName =fournisseur.familyLabel
            break
      
          }
      
        }
      }
      
  });

  }
  modifierfamille(){
    this. daitailleclient=3
    let famillemodifier:any={
      code:  this.code,
      familyLabel :  this.companyName,
    }
    
    this.store.dispatch(new modifierfamilleActions(famillemodifier));
    this.store.dispatch(new getfamillebycodesActions(famillemodifier.code));
    this.familleState$?.subscribe((state) => {
      if(state.four){
        this.code=state.four.code
        this.companyName =state.four.familyLabel
      }else{
        
        this.familleComplete = state?.famille.families;
        for(let fournisseur of this.familleComplete){
          if(fournisseur.code==famillemodifier.code){
            this.code=fournisseur.code
            this.companyName =fournisseur.familyLabel
            break
      
          }
      
        }
      }
      
  });
  }
 
  onchangepage(pageDta: PageEvent) {
    this.currentpage=pageDta.pageIndex+1
    this.nombrefamilleDansUnPage=pageDta.pageSize
    this.paginationParamter = { perPage:this.nombrefamilleDansUnPage,page:this.currentpage}
    this.getfamilleParpagination(this.paginationParamter)


  }
  retourner(){
    this.getfamilleParpagination(this.paginationParamter)
    this. daitailleclient=0
  }


  searchText = ""
  code=0
  companyName = ""
}




