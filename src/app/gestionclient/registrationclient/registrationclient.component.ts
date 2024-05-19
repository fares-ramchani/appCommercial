import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { client } from 'src/app/model/client.model';
import { clientComplete } from 'src/app/model/clientComplete.model';
import { ServiceclientService } from 'src/app/services/serviceclient.service';

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
     private ServiceclientService:ServiceclientService) { }



  ngOnInit(): void {
    this.formclientComplete = this.fb.group({
      code: this.fb.control(''),
      companyName: this.fb.control(''),
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
     
    });
  }
  saveclient(){
    let clientComplete:clientComplete=this.formclientComplete.value
    if(this.clientData!=null){
      clientComplete.client=this.clientData
    }
  
  }

}
