import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { paginationParamter } from 'src/app/model/paginationParamter.model';
import { GetAllfournisseurActions, getfournisseurbycodesActions } from 'src/app/ngrx/ngrxfournisseur/fournisseur.actions';
import { fournisseurState, fournisseurStateEnume } from 'src/app/ngrx/ngrxfournisseur/fournisseur.reducer';
import { ParamatrePaginationService } from 'src/app/services/paramatre-pagination.service';
import { ServicefournisseurService } from 'src/app/services/servicefournisseur.service';
import { ShowComposantrechercherFornisseurService } from 'src/app/services/show-composantrechercher-fornisseur.service';

@Component({
  selector: 'app-rechercher-fournisseur',
  templateUrl: './rechercher-fournisseur.component.html',
  styleUrls: ['./rechercher-fournisseur.component.css']
})
export class RechercherFournisseurComponent {
  fournisseurState$: Observable<fournisseurState> | null = null;
  readonly fournisseurStateEnume = fournisseurStateEnume;
  fournisseur: Array<any> = [];
  totalFournisseur =3
  nombrefournisseurDansUnPage = 11
  daitaillefournisseur=0
  currentpage=1
  formfournisseurComplete!: FormGroup;
  paginationParamter: paginationParamter = { perPage: this.nombrefournisseurDansUnPage, page:1 }
  constructor(private ParamatrePaginationService:ParamatrePaginationService, private store: Store<any>,
     private ServicefournisseurService: ServicefournisseurService,
     private ShowComposantrechercherFornisseurService: ShowComposantrechercherFornisseurService,
     private fb: FormBuilder) {
      this.formfournisseurComplete = this.fb.group({
        code: [''],
        companyName: [''],
        abbreviation: [''],
        maxCredit: [''],
        maxTerms: [''],
        inProgress: [false],
        address:[''],
        city:[''],
        postalCode:[''],
        country:[''],
        activity:[''],
        responsible:[''],
        phone:[''],
        fax:[''],
        email:[''],
        bank:[''],
        payment:[''],
        rib:[''],
        domiciliation:[''],
        fiscalID:[''],
        daysCount:[''],
        delay:[''],
        type:[''],
        nature:[''],
        accounting:[''],
        currency:[''],
        agent:[''],
        isVATSubject: [false], 
        isBlockedAccount: [false], 
        isFODECExemption: [false], 
        option1: [false], 
        isVATExemption: [false], 
        option2: [false], 
        isCICTExemption: [false], 
        option3: [false], 
        isStampExemption: [false]
      })
      }
  ngOnInit() {
    this.formfournisseurComplete.patchValue({
      code: this.codeInput.nativeElement.value,
      companyName: this.companyNameInput.nativeElement.value,
      // Ajoutez d'autres champs ici
    });
    this.fournisseurState$ = this.store.pipe(
      map((state) => state.fournisseurReducer)
    )
    this.getfournisseurParpagination(this.paginationParamter)
    
  }

  closepopup() {
    this.ShowComposantrechercherFornisseurService.setshowpopup();

  }
  getfournisseurParpagination(paginationParamter: paginationParamter) {
    this. daitaillefournisseur=0
    this.store.dispatch(new GetAllfournisseurActions(paginationParamter));
  }
  getFournisseurBycode(){
    this. daitaillefournisseur=0
    this.store.dispatch(new getfournisseurbycodesActions(parseInt(this.searchText)));


  }
  showdaitailleFournisseur(codefournisseur:number){
    this. daitaillefournisseur=1
    this.store.dispatch(new getfournisseurbycodesActions(codefournisseur));

  }
  showdaitailleFournisseurupdate(codefournisseur:number){
    this. daitaillefournisseur=2
    this.store.dispatch(new getfournisseurbycodesActions(codefournisseur));

  }
 
  onchangepage(pageDta: PageEvent) {
    this.currentpage=pageDta.pageIndex+1
    this.nombrefournisseurDansUnPage=pageDta.pageSize
    this.paginationParamter = { perPage:this.nombrefournisseurDansUnPage,page:this.currentpage}
    this.getfournisseurParpagination(this.paginationParamter)
    console.log(pageDta)

  }
  retourner(){
    this.getfournisseurParpagination(this.paginationParamter)
    this. daitaillefournisseur=0
  }


  searchText = ""
}
