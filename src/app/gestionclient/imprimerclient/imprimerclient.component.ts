import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShowComposantimprimerclientService } from 'src/app/services/show-composantimprimerclient.service';

@Component({
  selector: 'app-imprimerclient',
  templateUrl: './imprimerclient.component.html',
  styleUrls: ['./imprimerclient.component.css']
})
export class ImprimerclientComponent {
  formImprimer!:FormGroup;
  constructor(private ShowComposantimprimerclientService:ShowComposantimprimerclientService,
    private fb : FormBuilder
  ){}
  closepopup() {
    this.ShowComposantimprimerclientService.setshowpopup();
   
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
