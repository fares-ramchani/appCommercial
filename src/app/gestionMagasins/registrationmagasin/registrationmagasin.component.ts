import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable, map } from 'rxjs';
import { magasin } from 'src/app/model/magasin.model';
import { magasinState, magasinStateEnume } from 'src/app/ngrx/ngrxmagasin/magasin.reducer';
import { ServiceMagasinService } from 'src/app/services/service-magasin.service';
import { ShowComposantimprimermagasinService } from 'src/app/services/show-composantimprimermagasin.service';
import { ShowComposantrecherchermagasinService } from 'src/app/services/show-composantrecherchermagasin.service';
import { ShowComposantsupprimermagasinService } from 'src/app/services/show-composantsupprimermagasin.service';
import { ValidationFormulairService } from 'src/app/services/validation-formulair.service';

@Component({
  selector: 'app-registrationmagasin',
  templateUrl: './registrationmagasin.component.html',
  styleUrls: ['./registrationmagasin.component.css']
})
export class RegistrationmagasinComponent {
  showcomposantImprimer: boolean=false;
  showcomposantsupprimer: boolean=false
  showcomposantrechercher: boolean=false
  formmagasin!:FormGroup;
  currentDate: any;
  currentTime!: string;
  utilisateur:any;
  poste:any;
  magasinState$:Observable<magasinState> | null=null;
  readonly magasinStateEnume=magasinStateEnume;
  constructor(private ShowComposantsupprimermagasinService:ShowComposantsupprimermagasinService, private fb: FormBuilder,
    private ShowComposantrecherchermagasinService: ShowComposantrecherchermagasinService,
    private ShowComposantimprimermagasinService:ShowComposantimprimermagasinService,
    private ServiceMagasinService:ServiceMagasinService,
    private ValidationFormulairService:ValidationFormulairService,
    private store:Store<any>,
  ){
    this.currentDate = moment().format('YYYY-MM-DD');
    const date = new Date();
    this.currentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    this.utilisateur=localStorage.getItem("username");
    this.poste=localStorage.getItem("role");
  }
  ngOnInit(){
    this.ShowComposantsupprimermagasinService.showPopup1$.subscribe((inputData) => {
      this.showcomposantsupprimer = inputData
  
    });
    this.ShowComposantrecherchermagasinService.showPopup1$.subscribe((inputData) => {
      this.showcomposantrechercher = inputData
  
    });
    this.ShowComposantimprimermagasinService.showPopup1$.subscribe((inputData) => {
      this.showcomposantImprimer = inputData
  
    });
    this.magasinState$=this.store.pipe(
      map((state)=>state.magasinSaveReducer )
    )
    this.formmagasin = this.fb.group({
      store: this.fb.control(null,Validators.required),
      storeLabel: this.fb.control('',Validators.required),
    });
    this.formmagasin.valueChanges.subscribe((formData: magasin) => {
      this.ServiceMagasinService.updatemagasinData(formData); 
      this.ValidationFormulairService.setvalidationFormuliare(this.formmagasin.valid)
    });

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
