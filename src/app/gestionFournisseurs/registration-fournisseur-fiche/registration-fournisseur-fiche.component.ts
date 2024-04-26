import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { fournisseur } from 'src/app/model/fournisseur.model';
import { fournisseurComplete } from 'src/app/model/fournisseurComplete.model';
import { fournisseurState, fournisseurStateEnume } from 'src/app/ngrx/ngrxfournisseur/fournisseur.reducer';
import { ServicefournisseurService } from 'src/app/services/servicefournisseur.service';
import { ShowComposantImprimerFornisseurService } from 'src/app/services/show-composant-imprimer-fornisseur.service';
import { ShowComposantrechercherFornisseurService } from 'src/app/services/show-composantrechercher-fornisseur.service';
import { ShowComposantsurprimmerFornisseurService } from 'src/app/services/show-composantsurprimmer-fornisseur.service';

@Component({
  selector: 'app-registration-fournisseur-fiche',
  templateUrl: './registration-fournisseur-fiche.component.html',
  styleUrls: ['./registration-fournisseur-fiche.component.css']
})
export class RegistrationFournisseurFicheComponent {
  showcomposantImprimer: boolean=false;
  showcomposantsupprimer: boolean=false;
  showcomposantrechercher: boolean=false;
  fournisseurData: fournisseurComplete | null = null;
  formfournisseur!:FormGroup;
  FounisseurState$:Observable<fournisseurState> | null=null;
  readonly fournisseurStateEnume=fournisseurStateEnume;
  constructor(private store:Store<any>, private ServicefournisseurService:ServicefournisseurService,
    private fb : FormBuilder,private ShowComposantImprimerFornisseurService:ShowComposantImprimerFornisseurService,
    private ShowComposantsurprimmerFornisseurService:ShowComposantsurprimmerFornisseurService,
    private ShowComposantrechercherFornisseurService:ShowComposantrechercherFornisseurService
  ){}
  ngOnInit(): void {
    this.ShowComposantImprimerFornisseurService.showPopup1$.subscribe((inputData) => {
      this.showcomposantImprimer = inputData
  
    });

    this.ShowComposantsurprimmerFornisseurService.showPopup1$.subscribe((inputData) => {
      this.showcomposantsupprimer = inputData
  
    });
    this.ShowComposantrechercherFornisseurService.showPopup1$.subscribe((inputData) => {
      this.showcomposantrechercher = inputData
  
    });
    this.ServicefournisseurService.fournisseurCompletteData$.subscribe(data => {
      this.fournisseurData = data;
    });
    this.FounisseurState$=this.store.pipe(
      map((state)=>state.fournisseurSaveReducer )
    )

    this.formfournisseur=this.fb.group({
      address:this.fb.control(''),
      city:this.fb.control(''),
      postalCode:this.fb.control(''),
      country:this.fb.control(''),
      activity:this.fb.control(''),
      responsible:this.fb.control(''),
      phone:this.fb.control(''),
      fax:this.fb.control(''),
      email:this.fb.control(''),
      bank:this.fb.control(''),
      payment:this.fb.control(''),
      rib:this.fb.control(''),
      domiciliation:this.fb.control(''),
      fiscalID:this.fb.control(''),
      daysCount:this.fb.control(''),
      delay:this.fb.control(''),
      type:this.fb.control(''),
      nature:this.fb.control(''),
      accounting:this.fb.control(''),
      currency:this.fb.control(''),
      agent:this.fb.control(''),
      isVATSubject: this.fb.control(false), 
      isBlockedAccount: this.fb.control(false), 
      isFODECExemption: this.fb.control(false), 
      option1: this.fb.control(false), 
      isVATExemption: this.fb.control(false), 
      option2: this.fb.control(false), 
      isCICTExemption: this.fb.control(false), 
      option3: this.fb.control(false), 
      isStampExemption: this.fb.control(false)
    })
    this.formfournisseur.valueChanges.subscribe((formData: fournisseur) => {
      this.ServicefournisseurService.updateFournisseurData(formData); 
      this.ServicefournisseurService.updateFournisseurCompleteData1(formData,this.fournisseurData); 
    });

  }

  getDonnerFournisseur():fournisseur{
    let donfourn : fournisseur;
    donfourn=this.formfournisseur.value
    return  donfourn;
  }
  getErrorsMessage(arg0: string,error: any):string {
    if(error['required']){
      return arg0+ " obligatoir";
    }else if(error['email']){
      return "email invalid"
    }
    else if(error['min']){
      return  "telephone invalid"
    }
    else if(error['max']){
      return  "telephone invalid"
    }
    else return "";
    
  
  }

}
