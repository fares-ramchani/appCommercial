import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-modepaiement',
  templateUrl: './modepaiement.component.html',
  styleUrls: ['./modepaiement.component.css']
})
export class ModepaiementComponent {
  formModeDePaiement!:FormGroup;
  currentDate: any;
  currentTime!: string;
  utilisateur:any;
  poste:any;
  constructor(private fb: FormBuilder,
  ){
    this.currentDate = moment().format('YYYY-MM-DD');
    const date = new Date();
    this.currentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    this.utilisateur=localStorage.getItem("username");
    this.poste=localStorage.getItem("role");
  }
  ngOnInit(){

    this.formModeDePaiement = this.fb.group({
      ModeDePaiement: this.fb.control(''),
      NbreJours: this.fb.control(0),
      Banque: this.fb.control(''),
      CompteComptable: this.fb.control(''),
      Intituléducompte: this.fb.control(''),
    });
  }
}
