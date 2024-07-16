import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { client } from 'src/app/model/client.model';
import { clientComplete } from 'src/app/model/clientComplete.model';
import { ServiceclientService } from 'src/app/services/serviceclient.service';
import { ValidationFormulairService } from 'src/app/services/validation-formulair.service';

@Component({
  selector: 'app-registrationclient',
  templateUrl: './registrationclient.component.html',
  styleUrls: ['./registrationclient.component.css']
})
export class RegistrationclientComponent {
  formclientComplete!: FormGroup;
  clientData!: client;
  constructor(
     private fb: FormBuilder,
     private ServiceclientService:ServiceclientService,
     private ValidationFormulairService:ValidationFormulairService,) { }



  ngOnInit(): void {
    this.formclientComplete = this.fb.group({
      code: this.fb.control('',Validators.required),
      companyName: this.fb.control('',Validators.required),
      abbreviation: this.fb.control(''),
      maxCredit: this.fb.control(''),
      maxTerms: this.fb.control(''),
      inProgress: this.fb.control(false),
    })
    this.ServiceclientService.clientData$.subscribe(data => {
      this.clientData = data; 
    });



    this.formclientComplete.valueChanges.subscribe((formData: clientComplete) => {
      this.ServiceclientService.updateclientCompleteData(formData, this.clientData); 
      this.ValidationFormulairService.setvalidationFormuliare(this.formclientComplete.valid)
     
    });
  }
  saveclient(){
    let clientComplete:clientComplete=this.formclientComplete.value
    if(this.clientData!=null){
      clientComplete.client=this.clientData
    }
  
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
