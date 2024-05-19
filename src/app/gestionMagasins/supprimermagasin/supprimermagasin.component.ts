import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { paramatrePaginationClient } from 'src/app/model/paramatrePaginationClient.model';
import { DeletemagasinsActions, GetAllmagasintActions, getmagasinbycodesActions } from 'src/app/ngrx/ngrxmagasin/magasin.action';
import { magasinState, magasinStateEnume } from 'src/app/ngrx/ngrxmagasin/magasin.reducer';
import { ShowComposantsupprimermagasinService } from 'src/app/services/show-composantsupprimermagasin.service';

@Component({
  selector: 'app-supprimermagasin',
  templateUrl: './supprimermagasin.component.html',
  styleUrls: ['./supprimermagasin.component.css']
})
export class SupprimermagasinComponent {
  magasinState$: Observable<magasinState> | null = null;
  readonly magasinStateEnume = magasinStateEnume;
  magasin: Array<any> = [];
  totalmagasin =24
  nombremagasinDansUnPage = 10
  currentpage=1
  paginationParamter: paramatrePaginationClient = { perPage: this.nombremagasinDansUnPage, page:1 }
  constructor(  private store: Store<any>,private ShowComposantsupprimermagasinService: ShowComposantsupprimermagasinService){}
  closepopup() {
    this.ShowComposantsupprimermagasinService.setshowpopup();

  }
  ngOnInit() {
    this.magasinState$ = this.store.pipe(
      map((state) => state.magasinReducer)
    )
    this.getmagasinParpagination(this.paginationParamter)
    
    
  }
  getmagasinParpagination(paginationParamter: paramatrePaginationClient) {
    this.store.dispatch(new GetAllmagasintActions(paginationParamter));
  }
  onchangepage(pageDta: PageEvent) {
    this.currentpage=pageDta.pageIndex+1
    this.nombremagasinDansUnPage=pageDta.pageSize
    this.paginationParamter = { perPage:this.nombremagasinDansUnPage,page:this.currentpage}
    this.getmagasinParpagination(this.paginationParamter)
  }
  getmagasinBycode(){
    this.store.dispatch(new getmagasinbycodesActions(parseInt(this.searchText)));

  }


  deletemagasinByCode(codemagasin: number) {
    if (confirm("Êtes-vous sûr de supprimer cette borne ?")) {
      this.currentpage=1
      this.store.dispatch(new DeletemagasinsActions(codemagasin))
    
    }

  }
  retourner(){
    this.getmagasinParpagination(this.paginationParamter)

  }



  searchText = ""
}
