import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { paramatrePaginationClient } from 'src/app/model/paramatrePaginationClient.model';
import { DeletefamilleActions, GetAllfamilletActions, getfamillebycodesActions } from 'src/app/ngrx/ngrxfamille/famille.action';
import { familleState, familleStateEnume } from 'src/app/ngrx/ngrxfamille/famille.reducer';
import { ShowComposantsupprimerfamilleService } from 'src/app/services/show-composantsupprimerfamille.service';

@Component({
  selector: 'app-supprimerfamilles',
  templateUrl: './supprimerfamilles.component.html',
  styleUrls: ['./supprimerfamilles.component.css']
})
export class SupprimerfamillesComponent {
  familleState$: Observable<familleState> | null = null;
  readonly familleStateEnume = familleStateEnume;
  famille: Array<any> = [];
  totalfamille =24
  nombrefamilleDansUnPage = 10
  currentpage=1
  paginationParamter: paramatrePaginationClient = { perPage: this.nombrefamilleDansUnPage, page:1 }
  constructor(  private store: Store<any>,private ShowComposantsupprimerfamilleService: ShowComposantsupprimerfamilleService){}
  closepopup() {
    this.ShowComposantsupprimerfamilleService.setshowpopup();

  }
  ngOnInit() {
    this.familleState$ = this.store.pipe(
      map((state) => state.familleReducer)
    )
    this.getfamilleParpagination(this.paginationParamter)
    
    
  }
  getfamilleParpagination(paginationParamter: paramatrePaginationClient) {
    this.store.dispatch(new GetAllfamilletActions(paginationParamter));
  }
  onchangepage(pageDta: PageEvent) {
    this.currentpage=pageDta.pageIndex+1
    this.nombrefamilleDansUnPage=pageDta.pageSize
    this.paginationParamter = { perPage:this.nombrefamilleDansUnPage,page:this.currentpage}
    this.getfamilleParpagination(this.paginationParamter)
  }
  getfamilleBycode(){
    this.store.dispatch(new getfamillebycodesActions(parseInt(this.searchText)));

  }


  deletefamilleByCode(codefamille: number) {
    if (confirm("Êtes-vous sûr de supprimer cette borne ?")) {
      this.currentpage=1
      this.store.dispatch(new DeletefamilleActions(codefamille))
    
    }

  }
  retourner(){
    this.getfamilleParpagination(this.paginationParamter)

  }



  searchText = ""
}

