import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { client } from 'src/app/model/client.model';
import { clientComplete } from 'src/app/model/clientComplete.model';
import { clientState, clientStateEnume } from 'src/app/ngrx/ngrxclient/client.reducer';
import { ServiceclientService } from 'src/app/services/serviceclient.service';
import { ShowComposantimprimerclientService } from 'src/app/services/show-composantimprimerclient.service';
import { ShowComposantrechercherclientService } from 'src/app/services/show-composantrechercherclient.service';
import { ShowComposantsupprimerclientService } from 'src/app/services/show-composantsupprimerclient.service';

@Component({
  selector: 'app-registrationclient-fiche',
  templateUrl: './registrationclient-fiche.component.html',
  styleUrls: ['./registrationclient-fiche.component.css']
})
export class RegistrationclientFicheComponent {
  showcomposantImprimer: boolean=false;
  showcomposantsupprimer: boolean=false
  showcomposantrechercher: boolean=false
  formclient!:FormGroup;
  clientData: clientComplete| null = null;
  clientState$:Observable<clientState> | null=null;
  readonly clientStateEnume=clientStateEnume;
  constructor( private fb : FormBuilder,private store:Store<any>,
    private ShowComposantimprimerclientService:ShowComposantimprimerclientService,
    private ServiceclientService:ServiceclientService,
    private ShowComposantsupprimerclientService:ShowComposantsupprimerclientService,
    private ShowComposantrechercherclientService:ShowComposantrechercherclientService
  ){}
  ngOnInit(): void {
    this.ShowComposantimprimerclientService.showPopup1$.subscribe((inputData) => {
      this.showcomposantImprimer = inputData
  
    });
    this.ShowComposantsupprimerclientService.showPopup1$.subscribe((inputData) => {
      this.showcomposantsupprimer = inputData
  
    });
    this.ShowComposantrechercherclientService.showPopup1$.subscribe((inputData) => {
      this.showcomposantrechercher = inputData
  
    });
    this.clientState$=this.store.pipe(
      map((state)=>state.clientSaveReducer)
    )
    this.formclient=this.fb.group({
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
    });
    this.ServiceclientService.clientCompleteData$.subscribe(data => {
      this.clientData = data;
    });
    this.formclient.valueChanges.subscribe((formData: client) => {
      this.ServiceclientService.updateclientData(formData); 
      this.ServiceclientService.updateclientCompleteData1(formData,this.clientData); 
      
    });

}

getDonnerFournisseur():client{
  let donfourn : client;
  donfourn=this.formclient.value
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
