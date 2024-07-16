import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';
import { paramatrePaginationClient } from 'src/app/model/paramatrePaginationClient.model';
import { GetAllmagasintActions, getmagasinbycodesActions, modifiermagasinActions } from 'src/app/ngrx/ngrxmagasin/magasin.action';
import { magasinState, magasinStateEnume, magasinStateModifier } from 'src/app/ngrx/ngrxmagasin/magasin.reducer';
import { ParamatrePaginationClientService } from 'src/app/services/paramatre-pagination-client.service';
import { ShowComposantAlertmodifierService } from 'src/app/services/show-composant-alertmodifier.service';
import { ShowComposantrecherchermagasinService } from 'src/app/services/show-composantrecherchermagasin.service';

@Component({
  selector: 'app-recherche-magasin',
  templateUrl: './recherche-magasin.component.html',
  styleUrls: ['./recherche-magasin.component.css']
})
export class RechercheMagasinComponent {
  magasinState$: Observable<magasinState> | null = null;
  readonly magasinStateEnume = magasinStateEnume;
  magasinStatemodifeir$: Observable<magasinStateModifier> | null = null;
  readonly magasintateEnumemodifier = magasinStateEnume;
  magasin:any={}
  totalmagasin =3
  nombremagasinDansUnPage = 11
  daitailleclient=0
  currentpage=1
  magasinComplete: Array<any> = []
  showcomposantAlertmodifier: boolean = false
  paginationParamter: paramatrePaginationClient = { perPage: this.nombremagasinDansUnPage, page:1 }
  constructor(private ParamatrePaginationService:ParamatrePaginationClientService, private store: Store<any>,
     private ShowComposantrecherchermagasinService: ShowComposantrecherchermagasinService,
     private ShowComposantAlertmodifierService:ShowComposantAlertmodifierService,
     private fb: FormBuilder,    private toastr:ToastrService) {
      
      }
  ngOnDestroy() {
    this.magasin={ }
  }
  ngOnInit() {
    this.magasinState$ = this.store.pipe(
      map((state) => state.magasinReducer)
    )
    this.ShowComposantAlertmodifierService.showPopup1$.subscribe(data => {
      this.showcomposantAlertmodifier = data;
    });
   
    
    this.getmagasinParpagination(this.paginationParamter)
  
  
    
  }


  closepopup() {
    this.ShowComposantrecherchermagasinService.setshowpopup();

  }
  getmagasinParpagination(paginationParamter: paramatrePaginationClient) {
    this. daitailleclient=0
    this.store.dispatch(new GetAllmagasintActions(paginationParamter));
  }
  getmagasinBycode(){
    this. daitailleclient=0
    this.store.dispatch(new getmagasinbycodesActions(parseInt(this.searchText)));
   


  }
  showdaitaillemagasin(codemagasin:number){
    this. daitailleclient=1
    this.store.dispatch(new getmagasinbycodesActions(codemagasin));

  }
  showdaitaillemagasinupdate(codemagasin:number){
    this. daitailleclient=2
    this.store.dispatch(new getmagasinbycodesActions(codemagasin));
   
    this.magasinState$?.subscribe((state) => {
      if(state.four){
        this.code=state.four.store
        this.companyName =state.four.storeLabel
      }else{
        
        this.magasinComplete = state?.magasin.stores;
        for(let fournisseur of this.magasinComplete){
          if(fournisseur.store==codemagasin){
            this.code=fournisseur.store
            this.companyName =fournisseur.storeLabel
            break
      
          }
      
        }
      }
      
  });

  }
  modifiermagasin(){
    let magasinmodifier:any={
      store:  this.code,
      storeLabel :  this.companyName,
    }
    this.ShowComposantAlertmodifierService.setshowpopup()
    this.ShowComposantAlertmodifierService.setSharedData(magasinmodifier)
; 
    this.magasinState$?.subscribe((state) => {
      if(state.four){
        this.code=state.four.store
        this.companyName =state.four.storeLabel
      }else{
        
        this.magasinComplete = state?.magasin.stores;
        for(let fournisseur of this.magasinComplete){
          if(fournisseur.store==magasinmodifier.store){
            this.code=fournisseur.store
            this.companyName =fournisseur.storeLabel
            break
      
          }
      
        }
      }
      
  });
  this. daitailleclient=3
  }
 
  onchangepage(pageDta: PageEvent) {
    this.currentpage=pageDta.pageIndex+1
    this.nombremagasinDansUnPage=pageDta.pageSize
    this.paginationParamter = { perPage:this.nombremagasinDansUnPage,page:this.currentpage}
    this.getmagasinParpagination(this.paginationParamter)


  }
  retourner(){
    this.getmagasinParpagination(this.paginationParamter)
    this. daitailleclient=0
  }


  searchText = ""
  code=0
  companyName = ""
}



