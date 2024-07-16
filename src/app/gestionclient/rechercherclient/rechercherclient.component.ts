import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { paramatrePaginationClient } from 'src/app/model/paramatrePaginationClient.model';
import { GetAllclientActions, getclientbycodesActions, modifierclientActions } from 'src/app/ngrx/ngrxclient/client.actions';
import { clientState, clientStateEnume, clientStateModifier } from 'src/app/ngrx/ngrxclient/client.reducer';
import { ParamatrePaginationClientService } from 'src/app/services/paramatre-pagination-client.service';
import { ServiceclientService } from 'src/app/services/serviceclient.service';
import { ShowComposantAlertmodifierService } from 'src/app/services/show-composant-alertmodifier.service';
import { ShowComposantrechercherclientService } from 'src/app/services/show-composantrechercherclient.service';

@Component({
  selector: 'app-rechercherclient',
  templateUrl: './rechercherclient.component.html',
  styleUrls: ['./rechercherclient.component.css']
})
export class RechercherclientComponent {
  clientState$: Observable<clientState> | null = null;
  readonly clientStateEnume = clientStateEnume;
  clientStatemodifeir$: Observable<clientStateModifier> | null = null;
  readonly clienttateEnumemodifier = clientStateEnume;
  client:any={}
  totalClient =3
  nombreclientDansUnPage = 11
  daitailleclient=0
  currentpage=1
  formclientCompletee!: FormGroup;
  clientComplete: Array<any> = []
  showcomposantAlertmodifier: boolean = false
  paginationParamter: paramatrePaginationClient = { perPage: this.nombreclientDansUnPage, page:1 }
  constructor(private ParamatrePaginationService:ParamatrePaginationClientService, private store: Store<any>,
     private ServicefournisseurService: ServiceclientService,
     private ShowComposantrechercherclientService: ShowComposantrechercherclientService,
     private ShowComposantAlertmodifierService:ShowComposantAlertmodifierService,
     private fb: FormBuilder) {
      
      }
  ngOnDestroy() {
    this.client={ }
  }
  ngOnInit() {
    this.clientState$ = this.store.pipe(
      map((state) => state.clientReducer)
    )
    this.clientStatemodifeir$ = this.store.pipe(
      map((state) => state.fournisseurmodifierReducer)
    )
    this.ShowComposantAlertmodifierService.showPopup1$.subscribe(data => {
      this.showcomposantAlertmodifier = data;
    });
   
    
    this.getclientParpagination(this.paginationParamter)
  
  
    
  }


  closepopup() {
    this.ShowComposantrechercherclientService.setshowpopup();

  }
  getclientParpagination(paginationParamter: paramatrePaginationClient) {
    this. daitailleclient=0
    this.store.dispatch(new GetAllclientActions(paginationParamter));
  }
  getclientBycode(){
    this. daitailleclient=0
    this.store.dispatch(new getclientbycodesActions(parseInt(this.searchText)));


  }
  showdaitailleclient(codeclient:number){
    this. daitailleclient=1
    this.store.dispatch(new getclientbycodesActions(codeclient));

  }
  showdaitailleclientupdate(codeclient:number){
    this. daitailleclient=2
    this.store.dispatch(new getclientbycodesActions(codeclient));
   
    this.clientState$?.subscribe((state) => {
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
        
        this.clientComplete = state?.client.clients;
        for(let fournisseur of this.clientComplete){
          if(fournisseur.code==codeclient){
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
  modifierclient(){
    this. daitailleclient=3
    let clientmodifier:any={
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
    this.ShowComposantAlertmodifierService.setshowpopup()
    this.ShowComposantAlertmodifierService.setSharedData(clientmodifier)
    
    
    this.clientState$?.subscribe((state) => {
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
        
        this.clientComplete = state?.client.clients;
        for(let fournisseur of this.clientComplete){
          if(fournisseur.code==clientmodifier.code){
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
    this.nombreclientDansUnPage=pageDta.pageSize
    this.paginationParamter = { perPage:this.nombreclientDansUnPage,page:this.currentpage}
    this.getclientParpagination(this.paginationParamter)


  }
  retourner(){
    this.getclientParpagination(this.paginationParamter)
    this. daitailleclient=0
    console.log(this.clientComplete)
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


