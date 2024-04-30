import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { fournisseur } from 'src/app/model/fournisseur.model';
import { fournisseurComplete } from 'src/app/model/fournisseurComplete.model';
import { ServicefournisseurService } from 'src/app/services/servicefournisseur.service';
import { ShowComposantSidebarNvigationService } from 'src/app/services/show-composant-sidebar-nvigation.service';


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
     private fb: FormBuilder,) { }
  ngOnInit(): void {
    this.formfournisseurComplete = this.fb.group({
      code: this.fb.control(''),
      companyName: this.fb.control(''),
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
}
