import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShowComposantImprimerFornisseurService } from 'src/app/services/show-composant-imprimer-fornisseur.service';
import { ShowComposantsurprimmerFornisseurService } from 'src/app/services/show-composantsurprimmer-fornisseur.service';

@Component({
  selector: 'app-registration-fournisseur-memo',
  templateUrl: './registration-fournisseur-memo.component.html',
  styleUrls: ['./registration-fournisseur-memo.component.css']
})
export class RegistrationFournisseurMemoComponent {
  showcomposantImprimer: boolean=false;
  formLogin!:FormGroup;
  showcomposantsupprimer: boolean=false;
constructor(private fb : FormBuilder,private ShowComposantImprimerFornisseurService:ShowComposantImprimerFornisseurService,
  private ShowComposantsurprimmerFornisseurService:ShowComposantsurprimmerFornisseurService
){}
ngOnInit(): void {
  this.ShowComposantImprimerFornisseurService.showPopup1$.subscribe((inputData) => {
    this.showcomposantImprimer = inputData
  });

  this.ShowComposantsurprimmerFornisseurService.showPopup1$.subscribe((inputData) => {
    this.showcomposantsupprimer = inputData

  });


  this.formLogin=this.fb.group({
    nom:this.fb.control('',Validators.required),
  })
}

}
