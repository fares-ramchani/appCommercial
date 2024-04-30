import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { fournisseurComplete } from 'src/app/model/fournisseurComplete.model';
import { paginationParamter } from 'src/app/model/paginationParamter.model';
import { GetAllfournisseurActions, getfournisseurbycodesActions, modifierfournisseurActions } from 'src/app/ngrx/ngrxfournisseur/fournisseur.actions';
import { fournisseurState, fournisseurStateEnume, fournisseurStateModifier } from 'src/app/ngrx/ngrxfournisseur/fournisseur.reducer';
import { ParamatrePaginationService } from 'src/app/services/paramatre-pagination.service';
import { ServicefournisseurService } from 'src/app/services/servicefournisseur.service';
import { ShowComposantrechercherFornisseurService } from 'src/app/services/show-composantrechercher-fornisseur.service';

@Component({
  selector: 'app-rechercher-fournisseur',
  templateUrl: './rechercher-fournisseur.component.html',
  styleUrls: ['./rechercher-fournisseur.component.css']
})
export class RechercherFournisseurComponent implements OnDestroy {
  fournisseurState$: Observable<fournisseurState> | null = null;
  readonly fournisseurStateEnume = fournisseurStateEnume;
  fournisseurStatemodifeir$: Observable<fournisseurStateModifier> | null = null;
  readonly fournisseurStateEnumemodifier = fournisseurStateEnume;
  fournisseur:any={}
  totalFournisseur =3
  nombrefournisseurDansUnPage = 11
  daitaillefournisseur=0
  currentpage=1
  formfournisseurCompletee!: FormGroup;
  fournisseurComplete: Array<any> = []
  paginationParamter: paginationParamter = { perPage: this.nombrefournisseurDansUnPage, page:1 }
  constructor(private ParamatrePaginationService:ParamatrePaginationService, private store: Store<any>,
     private ServicefournisseurService: ServicefournisseurService,
     private ShowComposantrechercherFornisseurService: ShowComposantrechercherFornisseurService,
     private fb: FormBuilder) {
      
      }
  ngOnDestroy() {
    this.fournisseur={ }
  }
  ngOnInit() {
    this.fournisseurState$ = this.store.pipe(
      map((state) => state.fournisseurReducer)
    )
    this.fournisseurStatemodifeir$ = this.store.pipe(
      map((state) => state.fournisseurmodifierReducer)
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
   
    this.fournisseurState$?.subscribe((state) => {
      if(state.four){
        this.code=state.four.code
        this.companyName =state.four.companyName
        this.abbreviation=state.four.abbreviation
        this.maxCredit=state.four.maxCredit
        this.maxTerms=state.four.maxTerms
        this.inProgress=state.four.inProgress
        this.address=state.four.address
        this.city=state.four.city
        this.postalCode=state.four.postalCode
        this.country=state.four.country
        this.activity=state.four.activity
        this.responsible=state.four.responsible
        this.phone=state.four.phone
        this.fax=state.four.fax
        this.email=state.four.email
        this.bank=state.four.bank
        this.rib=state.four.rib
        this.domiciliation=state.four.domiciliation
        this.fiscalID=state.four.fiscalID
        this.payment=state.four.payment
        this.daysCount=state.four.daysCount
        this.delay=state.four.delay
        this.type=state.four.type
        this.accounting=state.four.accounting
        this.nature=state.four.nature
        this.currency=state.four.currency
        this.agent=state.four.agent
        this.isVATSubject=state.four.isVATSubject
        this.isBlockedAccount=state.four.isBlockedAccount
        this.isFODECExemption=state.four.isFODECExemption
        this.isVATExemption=state.four.isVATExemption
        this.isCICTExemption=state.four.isCICTExemption
        this.isStampExemption=state.four.isStampExemption
        this.option1=state.four.option1
        this.option2 =state.four.option2
        this.option3 =state.four.option3
      }else{
        
        this.fournisseurComplete = state?.fournisseur.suppliers;
        for(let fournisseur of this.fournisseurComplete){
          if(fournisseur.code==codefournisseur){
            this.code=fournisseur.code
            this.companyName =fournisseur.companyName
            this.abbreviation=fournisseur.abbreviation
            this.maxCredit=fournisseur.maxCredit
            this.maxTerms=fournisseur.maxTerms
            this.inProgress=fournisseur.inProgress
            this.address=fournisseur.address
            this.city=fournisseur.city
            this.postalCode=fournisseur.postalCode
            this.country=fournisseur.country
            this.activity=fournisseur.activity
            this.responsible=fournisseur.responsible
            this.phone=fournisseur.phone
            this.fax=fournisseur.fax
            this.email=fournisseur.email
            this.bank=fournisseur.bank
            this.rib=fournisseur.rib
            this.domiciliation=fournisseur.domiciliation
            this.fiscalID=fournisseur.fiscalID
            this.payment=fournisseur.payment
            this.daysCount=fournisseur.daysCount
            this.delay=fournisseur.delay
            this.type=fournisseur.type
            this.accounting=fournisseur.accounting
            this.nature=fournisseur.nature
            this.currency=fournisseur.currency
            this.agent=fournisseur.agent
            this.isVATSubject=fournisseur.isVATSubject
            this.isBlockedAccount=fournisseur.isBlockedAccount
            this.isFODECExemption=fournisseur.isFODECExemption
            this.isVATExemption=fournisseur.isVATExemption
            this.isCICTExemption=fournisseur.isCICTExemption
            this.isStampExemption=fournisseur.isStampExemption
            this.option1=fournisseur.option1
            this.option2 =fournisseur.option2
            this.option3 =fournisseur.option3
            break
      
          }
      
        }
      }
      
  });

  }
  modifierFournisseur(){
    this. daitaillefournisseur=3
    let fournisseurmodifier:any={
      code:  this.code,
      companyName :  this.companyName,
      abbreviation: this.abbreviation ,
      maxCredit: this.maxCredit,
      maxTerms: this.maxTerms,
      inProgress: this.inProgress,
      address: this.address,
      city: this.city,
      postalCode: this.postalCode,
      country: this.country,
      activity: this.activity,
      responsible: this.responsible,
      phone: this.phone,
      fax: this.fax,
      email: this.email,
      bank: this.bank,
      rib: this.rib,
      domiciliation: this.domiciliation,
      fiscalID: this.fiscalID,
      payment: this.payment,
      daysCount: this.daysCount,
      delay: this.delay,
      type: this.type,
      accounting: this.accounting,
      nature: this.nature,
      currency: this.currency,
      agent: this.agent,
      isVATSubject: this.isVATSubject,
      isBlockedAccount: this.isBlockedAccount,
      isFODECExemption: this.isFODECExemption,
      isVATExemption: this.isVATExemption,
      isCICTExemption: this.isCICTExemption,
      isStampExemption: this.isStampExemption,
      option1: this.option1,
      option2 : this.option2,
      option3 : this.option3

    }
    
    this.store.dispatch(new modifierfournisseurActions(fournisseurmodifier));
    this.store.dispatch(new getfournisseurbycodesActions(fournisseurmodifier.code));
    this.fournisseurState$?.subscribe((state) => {
      if(state.four){
        this.code=state.four.code
        this.companyName =state.four.companyName
        this.abbreviation=state.four.abbreviation
        this.maxCredit=state.four.maxCredit
        this.maxTerms=state.four.maxTerms
        this.inProgress=state.four.inProgress
        this.address=state.four.address
        this.city=state.four.city
        this.postalCode=state.four.postalCode
        this.country=state.four.country
        this.activity=state.four.activity
        this.responsible=state.four.responsible
        this.phone=state.four.phone
        this.fax=state.four.fax
        this.email=state.four.email
        this.bank=state.four.bank
        this.rib=state.four.rib
        this.domiciliation=state.four.domiciliation
        this.fiscalID=state.four.fiscalID
        this.payment=state.four.payment
        this.daysCount=state.four.daysCount
        this.delay=state.four.delay
        this.type=state.four.type
        this.accounting=state.four.accounting
        this.nature=state.four.nature
        this.currency=state.four.currency
        this.agent=state.four.agent
        this.isVATSubject=state.four.isVATSubject
        this.isBlockedAccount=state.four.isBlockedAccount
        this.isFODECExemption=state.four.isFODECExemption
        this.isVATExemption=state.four.isVATExemption
        this.isCICTExemption=state.four.isCICTExemption
        this.isStampExemption=state.four.isStampExemption
        this.option1=state.four.option1
        this.option2 =state.four.option2
        this.option3 =state.four.option3
      }else{
        
        this.fournisseurComplete = state?.fournisseur.suppliers;
        for(let fournisseur of this.fournisseurComplete){
          if(fournisseur.code==fournisseurmodifier.code){
            this.code=fournisseur.code
            this.companyName =fournisseur.companyName
            this.abbreviation=fournisseur.abbreviation
            this.maxCredit=fournisseur.maxCredit
            this.maxTerms=fournisseur.maxTerms
            this.inProgress=fournisseur.inProgress
            this.address=fournisseur.address
            this.city=fournisseur.city
            this.postalCode=fournisseur.postalCode
            this.country=fournisseur.country
            this.activity=fournisseur.activity
            this.responsible=fournisseur.responsible
            this.phone=fournisseur.phone
            this.fax=fournisseur.fax
            this.email=fournisseur.email
            this.bank=fournisseur.bank
            this.rib=fournisseur.rib
            this.domiciliation=fournisseur.domiciliation
            this.fiscalID=fournisseur.fiscalID
            this.payment=fournisseur.payment
            this.daysCount=fournisseur.daysCount
            this.delay=fournisseur.delay
            this.type=fournisseur.type
            this.accounting=fournisseur.accounting
            this.nature=fournisseur.nature
            this.currency=fournisseur.currency
            this.agent=fournisseur.agent
            this.isVATSubject=fournisseur.isVATSubject
            this.isBlockedAccount=fournisseur.isBlockedAccount
            this.isFODECExemption=fournisseur.isFODECExemption
            this.isVATExemption=fournisseur.isVATExemption
            this.isCICTExemption=fournisseur.isCICTExemption
            this.isStampExemption=fournisseur.isStampExemption
            this.option1=fournisseur.option1
            this.option2 =fournisseur.option2
            this.option3 =fournisseur.option3
            break
      
          }
      
        }
      }
      
  });
  }
 
  onchangepage(pageDta: PageEvent) {
    this.currentpage=pageDta.pageIndex+1
    this.nombrefournisseurDansUnPage=pageDta.pageSize
    this.paginationParamter = { perPage:this.nombrefournisseurDansUnPage,page:this.currentpage}
    this.getfournisseurParpagination(this.paginationParamter)


  }
  retourner(){
    this.getfournisseurParpagination(this.paginationParamter)
    this. daitaillefournisseur=0
    console.log(this.fournisseurComplete)
  }


  searchText = ""
  code=0
  companyName = ""
  abbreviation= ""
  maxCredit= 0
  maxTerms= 0
  inProgress= false
  address=""
  city= ""
  postalCode= ""
  country= ""
  activity= ""
  responsible= ""
  phone= ""
  fax= ""
  email= ""
  bank= ""
  rib= ""
  domiciliation= ""
  fiscalID= ""
  payment= ""
  daysCount= 0
  delay= 0
  type= ""
  accounting= ""
  nature= ""
  currency= ""
  agent= ""
  isVATSubject=false
  isBlockedAccount= false
  isFODECExemption= false
  isVATExemption= false
  isCICTExemption= false
  isStampExemption= false
  option1=false
  option2 =false
  option3 = false
}
