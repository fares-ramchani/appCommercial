import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fournisseur } from 'src/app/model/fournisseur.model';
import { fournisseurComplete } from 'src/app/model/fournisseurComplete.model';
import { ServicefournisseurService } from 'src/app/services/servicefournisseur.service';
import { ShowComposantSidebarNvigationService } from 'src/app/services/show-composant-sidebar-nvigation.service';
import { ValidationFormulairService } from 'src/app/services/validation-formulair.service';


@Component({
  selector: 'app-registration-fournisseur',
  templateUrl: './registration-fournisseur.component.html',
  styleUrls: ['./registration-fournisseur.component.css']
})
export class RegistrationFournisseurComponent {
 
  
  showcomposantSideBarNavigation: boolean = false;
  formfournisseurComplete!: FormGroup;
  fournisseurData!: fournisseur;
  constructor(private ServicefournisseurService:ServicefournisseurService,
    private ShowComposantSidebarNvigationService: ShowComposantSidebarNvigationService,
    private ValidationFormulairService:ValidationFormulairService,
     private fb: FormBuilder,) { }
  ngOnInit(): void {
    this.formfournisseurComplete = this.fb.group({
      code: this.fb.control('',Validators.required),
      companyName: this.fb.control('',Validators.required),
      abbreviation: this.fb.control(''),
      maxCredit: this.fb.control(''),
      maxTerms: this.fb.control(''),
      inProgress: this.fb.control(false),
    })

    this.ServicefournisseurService.fournisseurData$.subscribe(data => {
      this.fournisseurData = data; 
    });



    this.formfournisseurComplete.valueChanges.subscribe((formData: fournisseurComplete) => {
      this.ServicefournisseurService.updateFournisseurCompleteData(formData, this.fournisseurData); 
      this.ValidationFormulairService.setvalidationFormuliare(this.formfournisseurComplete.valid)
    });
  }



  closepopup() {
    this.ShowComposantSidebarNvigationService.closeshowpopup();

  }


savefournisseur(){
  let fournisseurComplete:fournisseurComplete=this.formfournisseurComplete.value
  if(this.fournisseurData!=null){
    fournisseurComplete.fournisseur=this.fournisseurData
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
