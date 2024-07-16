import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { paramatrePaginationClient } from 'src/app/model/paramatrePaginationClient.model';
import { DeleteclientsActions, GetAllclientActions, getclientbycodesActions } from 'src/app/ngrx/ngrxclient/client.actions';
import { clientState, clientStateEnume } from 'src/app/ngrx/ngrxclient/client.reducer';
import { ShowComposantAlertsupprimerService } from 'src/app/services/show-composant-alertsupprimer.service';
import { ShowComposantsupprimerclientService } from 'src/app/services/show-composantsupprimerclient.service';

@Component({
  selector: 'app-supprimerclient',
  templateUrl: './supprimerclient.component.html',
  styleUrls: ['./supprimerclient.component.css']
})
export class SupprimerclientComponent {
  clientState$: Observable<clientState> | null = null;
  readonly clientStateEnume = clientStateEnume;
  client: Array<any> = [];
  totalclient =24
  nombreclientDansUnPage = 10
  currentpage=1
  showcomposantAlertSuprimer:boolean=false
  paginationParamter: paramatrePaginationClient = { perPage: this.nombreclientDansUnPage, page:1 }
  constructor(  private store: Store<any>,
    private ShowComposantsupprimerclientService: ShowComposantsupprimerclientService,
    private ShowComposantAlertsupprimerService:ShowComposantAlertsupprimerService){}
  closepopup() {
    this.ShowComposantsupprimerclientService.setshowpopup();

  }
  ngOnInit() {
    this.clientState$ = this.store.pipe(
      map((state) => state.clientReducer)
    )
    this.ShowComposantAlertsupprimerService.showPopup1$.subscribe(data => {
      this.showcomposantAlertSuprimer = data;
    });
    this.getclientParpagination(this.paginationParamter)
    
    
  }
  getclientParpagination(paginationParamter: paramatrePaginationClient) {
    this.store.dispatch(new GetAllclientActions(paginationParamter));
  }
  onchangepage(pageDta: PageEvent) {
    this.currentpage=pageDta.pageIndex+1
    this.nombreclientDansUnPage=pageDta.pageSize
    this.paginationParamter = { perPage:this.nombreclientDansUnPage,page:this.currentpage}
    this.getclientParpagination(this.paginationParamter)
    console.log(pageDta)

  }
  getclientBycode(){
    this.store.dispatch(new getclientbycodesActions(parseInt(this.searchText)));

  }


  deleteclientByCode(codeFournisseur: number) {
    this.ShowComposantAlertsupprimerService.setshowpopup()
    this.ShowComposantAlertsupprimerService.setSharedData(codeFournisseur)
    this.currentpage=1
    
  }
  retourner(){
    this.getclientParpagination(this.paginationParamter)

  }



  searchText = ""
}