import { Component } from '@angular/core';
import { Observable, count, map } from 'rxjs';
import { paginationParamter } from 'src/app/model/paginationParamter.model';
import { fournisseurState, fournisseurStateEnume } from 'src/app/ngrx/ngrxfournisseur/fournisseur.reducer';
import { ServicefournisseurService } from 'src/app/services/servicefournisseur.service';
import { ShowComposantsurprimmerFornisseurService } from 'src/app/services/show-composantsurprimmer-fornisseur.service';
import { Store } from '@ngrx/store';
import { DeletefournisseursActions, GetAllfournisseurActions, getfournisseurbycodesActions } from 'src/app/ngrx/ngrxfournisseur/fournisseur.actions';
import { PageEvent } from '@angular/material/paginator';
import { ParamatrePaginationService } from 'src/app/services/paramatre-pagination.service';
import { state } from '@angular/animations';
import { ShowComposantAlertsupprimerService } from 'src/app/services/show-composant-alertsupprimer.service';
@Component({
  selector: 'app-suprimer-fournisseur',
  templateUrl: './suprimer-fournisseur.component.html',
  styleUrls: ['./suprimer-fournisseur.component.css']
})
export class SuprimerFournisseurComponent {
  fournisseurState$: Observable<fournisseurState> | null = null;
  readonly fournisseurStateEnume = fournisseurStateEnume;
  fournisseur: Array<any> = [];
  totalFournisseur = 24
  nombrefournisseurDansUnPage = 10
  currentpage = 1
  showcomposantAlertSuprimer: boolean = false
  paginationParamter: paginationParamter = { perPage: this.nombrefournisseurDansUnPage, page: 1 }
  constructor(private ParamatrePaginationService: ParamatrePaginationService,
    private store: Store<any>,
    private ServicefournisseurService: ServicefournisseurService,
    private ShowComposantsurprimmerFornisseurService: ShowComposantsurprimmerFornisseurService,
    private ShowComposantAlertsupprimerService: ShowComposantAlertsupprimerService) { }
  ngOnInit() {
    this.fournisseurState$ = this.store.pipe(
      map((state) => state.fournisseurReducer)
    )
    this.getfournisseurParpagination(this.paginationParamter)
    this.ShowComposantAlertsupprimerService.showPopup1$.subscribe(data => {
      this.showcomposantAlertSuprimer = data;
    });


  }

  closepopup() {
    this.ShowComposantsurprimmerFornisseurService.setshowpopup();

  }
  getfournisseurParpagination(paginationParamter: paginationParamter) {
    this.store.dispatch(new GetAllfournisseurActions(paginationParamter));
  }
  onchangepage(pageDta: PageEvent) {
    this.currentpage = pageDta.pageIndex + 1
    this.nombrefournisseurDansUnPage = pageDta.pageSize
    this.paginationParamter = { perPage: this.nombrefournisseurDansUnPage, page: this.currentpage }
    this.getfournisseurParpagination(this.paginationParamter)
    console.log(pageDta)

  }
  getFournisseurBycode() {
    this.store.dispatch(new getfournisseurbycodesActions(parseInt(this.searchText)));

  }


  deleteFournisseurByCode(codeFournisseur: number) {
    this.ShowComposantAlertsupprimerService.setshowpopup()
    this.ShowComposantAlertsupprimerService.setSharedData(codeFournisseur)
    this.currentpage = 1
  }
  retourner() {
    this.getfournisseurParpagination(this.paginationParamter)

  }



  searchText = ""
}