import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { ShowComposantimprimerfamilleService } from 'src/app/services/show-composantimprimerfamille.service';
import { ShowComposantrecherchefamilleService } from 'src/app/services/show-composantrecherchefamille.service';
import { ShowComposantsupprimerfamilleService } from 'src/app/services/show-composantsupprimerfamille.service';

@Component({
  selector: 'app-registrationfamilles',
  templateUrl: './registrationfamilles.component.html',
  styleUrls: ['./registrationfamilles.component.css']
})
export class RegistrationfamillesComponent {
  showcomposantImprimer: boolean=false;
  showcomposantsupprimer: boolean=false
  showcomposantrechercher: boolean=false
  formfamille!:FormGroup;
  currentDate: any;
  currentTime!: string;
  utilisateur:any;
  poste:any;
  constructor( private fb: FormBuilder,private ShowComposantimprimerfamilleService: ShowComposantimprimerfamilleService,
    private ShowComposantrecherchefamilleService: ShowComposantrecherchefamilleService,
    private ShowComposantsupprimerfamilleService: ShowComposantsupprimerfamilleService
  ){
    this.currentDate = moment().format('YYYY-MM-DD');
    const date = new Date();
    this.currentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    this.utilisateur=localStorage.getItem("username");
    this.poste=localStorage.getItem("role");
  }
  ngOnInit(){
    this.formfamille = this.fb.group({
      CodeFamille: this.fb.control(''),
      LibelléFamille: this.fb.control(''),
      Margesurvente: this.fb.control(false),
      Calculprixdevente: this.fb.control(''),
      calculprixminimal: this.fb.control(''),
      FodecAchat: this.fb.control(Number),
      Frais: this.fb.control(Number),
      fraisfixe: this.fb.control(Number),
      Margedevente: this.fb.control(Number),
      plusfrais: this.fb.control(false),
      Fodec: this.fb.control(Number),
      TVA: this.fb.control(Number),
      soumisalamajorationdelaTVA: this.fb.control(false),
      CICT: this.fb.control(Number),
      Margeminimale: this.fb.control(Number),
      Marge2: this.fb.control(Number),
      Remise1M2: this.fb.control(Number),
      Remise2M2: this.fb.control(Number),
      Remise3M2: this.fb.control(Number),
      Marge3: this.fb.control(Number),
      Remise1M3: this.fb.control(Number),
      Remise2M3: this.fb.control(Number),
      Remise3M3: this.fb.control(Number),
      Marge4: this.fb.control(Number),
      Remise1M4: this.fb.control(Number),
      Remise2M4: this.fb.control(Number),
      Remise3M4: this.fb.control(Number),
      Marge5: this.fb.control(Number),
      Remise1M5: this.fb.control(Number),
      Remise2M5: this.fb.control(Number),
      Remise3M5: this.fb.control(Number),
      CompteComptable: this.fb.control(''),
      Intituléducompte: this.fb.control(''),
    });
    this.ShowComposantimprimerfamilleService.showPopup1$.subscribe((inputData) => {
      this.showcomposantImprimer = inputData
  
    });
    this.ShowComposantrecherchefamilleService.showPopup1$.subscribe((inputData) => {
      this.showcomposantrechercher = inputData
  
    });
    this.ShowComposantsupprimerfamilleService.showPopup1$.subscribe((inputData) => {
      this.showcomposantsupprimer = inputData
  
    });
  }
}
