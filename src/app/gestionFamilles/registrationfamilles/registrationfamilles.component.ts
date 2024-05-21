import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable, map } from 'rxjs';
import { famille } from 'src/app/model/famille.model';
import { familleState, familleStateEnume } from 'src/app/ngrx/ngrxfamille/famille.reducer';
import { ServicefamilleService } from 'src/app/services/servicefamille.service';
import { ShowComposantimprimerfamilleService } from 'src/app/services/show-composantimprimerfamille.service';
import { ShowComposantrecherchefamilleService } from 'src/app/services/show-composantrecherchefamille.service';
import { ShowComposantsupprimerfamilleService } from 'src/app/services/show-composantsupprimerfamille.service';

@Component({
  selector: 'app-registrationfamilles',
  templateUrl: './registrationfamilles.component.html',
  styleUrls: ['./registrationfamilles.component.css']
})
export class RegistrationfamillesComponent {
  showcomposantImprimer: boolean = false;
  showcomposantsupprimer: boolean = false
  showcomposantrechercher: boolean = false
  formfamille!: FormGroup;
  currentDate: any;
  currentTime!: string;
  utilisateur: any;
  poste: any;
  famille!: famille
  familleState$:Observable<familleState> | null=null;
  readonly familleStateEnume=familleStateEnume;
  constructor(private fb: FormBuilder, private ShowComposantimprimerfamilleService: ShowComposantimprimerfamilleService,
    private ShowComposantrecherchefamilleService: ShowComposantrecherchefamilleService,
    private ShowComposantsupprimerfamilleService: ShowComposantsupprimerfamilleService,
    private ServicefamilleService: ServicefamilleService,
    private store:Store<any>,
  ) {
    this.currentDate = moment().format('YYYY-MM-DD');
    const date = new Date();
    this.currentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    this.utilisateur = localStorage.getItem("username");
    this.poste = localStorage.getItem("role");
  }
  ngOnInit() {
    this.familleState$=this.store.pipe(
      map((state)=>state.familleSaveReducer )
    )
    this.formfamille = this.fb.group({
      code: this.fb.control(''),
      familyLabel: this.fb.control(''),
      isProfitMargin: this.fb.control(false),
      priceCalculationOn: this.fb.control(''),
      minimumViablePriceOn: this.fb.control(''),
      purchase: this.fb.control(Number),
      fees: this.fb.control(Number),
      fixedFees: this.fb.control(Number),
      profitMargin: this.fb.control(Number),
      isProfitMarginPlusFees: this.fb.control(false),
      fodec: this.fb.control(Number),
      tva: this.fb.control(Number),
      isSubjectToVAT: this.fb.control(false),
      cict: this.fb.control(Number),
      minimumMargin: this.fb.control(Number),
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
      accountingAccount: this.fb.control(''),
      accountTitle: this.fb.control(''),
    });
    this.formfamille.valueChanges.subscribe((formData: famille) => {
      if (this.formfamille.value.Marge2) {
        formData.margin2 = {
          value: this.formfamille.value.Marge2, discount1: this.formfamille.value.Remise1M2,
          discount2: this.formfamille.value.Remise2M2, discount3: this.formfamille.value.Remise3M2
        }
      }
      if (this.formfamille.value.Marge3) {
        formData.margin3 = {
          value: this.formfamille.value.Marge3, discount1: this.formfamille.value.Remise1M3,
          discount2: this.formfamille.value.Remise2M3, discount3: this.formfamille.value.Remise3M3
        }
      }
      if (this.formfamille.value.Marge4) {
      formData.margin4 = {
          value: this.formfamille.value.Marge4, discount1: this.formfamille.value.Remise1M4,
          discount2: this.formfamille.value.Remise2M4, discount3: this.formfamille.value.Remise3M4
        }
      }
      if (this.formfamille.value.Marge5) {
        formData.margin5 = {
          value: this.formfamille.value.Marge5, discount1: this.formfamille.value.Remise1M5,
          discount2: this.formfamille.value.Remise2M5, discount3: this.formfamille.value.Remise3M5
        }
      }
      this.ServicefamilleService.updatefamilleData(formData);
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
