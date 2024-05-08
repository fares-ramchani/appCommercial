import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShowComposantImprimerFornisseurService } from 'src/app/services/show-composant-imprimer-fornisseur.service';

@Component({
  selector: 'app-imprimer',
  templateUrl: './imprimer.component.html',
  styleUrls: ['./imprimer.component.css']
})
export class ImprimerComponent {
  formImprimer!:FormGroup;
  constructor(private ShowComposantImprimerFornisseurService:ShowComposantImprimerFornisseurService,
    private fb : FormBuilder
  ){}
  closepopup() {
    this.ShowComposantImprimerFornisseurService.setshowpopup();
   
  }
  ngOnInit()
{
  this.formImprimer=this.fb.group({
    code:this.fb.control(false),
    postalCode:this.fb.control(''),
    agent:this.fb.control(''),
    sortQuery:this.fb.control(''),
    fromCode:this.fb.control(''),
    toCode:this.fb.control(''),
    city:this.fb.control(''),
    country:this.fb.control(''),
    activity:this.fb.control(''),
    payment:this.fb.control(''),
    bank:this.fb.control(''),
    type:this.fb.control(''),
    nature:this.fb.control(''),
    banke:this.fb.control(''),
    isVATSubject:this.fb.control(''),
    isBlockedAccount:this.fb.control(''),
});


}
imprimer(){
   window.print(); 
}
}
