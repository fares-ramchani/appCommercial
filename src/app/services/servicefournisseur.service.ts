import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { fournisseur } from '../model/fournisseur.model';
import { fournisseurComplete } from '../model/fournisseurComplete.model';
import { HttpClient } from '@angular/common/http';
import { paginationParamter } from '../model/paginationParamter.model';

@Injectable({
  providedIn: 'root'
})
export class ServicefournisseurService {

  fournisseur1:fournisseur={
  address:"",
  city: "",
  postalCode: "",
  country: "",
  activity: "",
  responsible: "",
  phone: "",
  fax: "",
  email: "",
  bank: "",
  rib: "",
  domiciliation: "",
  fiscalID: "",
  payment: "",
  daysCount: 0,
  delay: 0,
  type: "",
  accounting: "",
  nature: "",
  currency: "",
  agent: "",
  isVATSubject: false,
  isBlockedAccount: false,
  isFODECExemption: false,
  isVATExemption: false,
  isCICTExemption: false,
  isStampExemption: false,
  option1: false,
  option2 : false,
  option3 : false}



  fournisseurComplete1:fournisseurComplete={
    code: 0,
    companyName : "",
    abbreviation: "",
    maxCredit: 0,
    maxTerms: 0,
    inProgress: false,
    fournisseur:this.fournisseur1}



  private fournisseurData = new BehaviorSubject<fournisseur | fournisseur>(this.fournisseur1);
  fournisseurData$ = this.fournisseurData.asObservable();



  private fournisseurCompletteData = new BehaviorSubject<fournisseurComplete | fournisseurComplete>(this.fournisseurComplete1);
  fournisseurCompletteData$ = this.fournisseurCompletteData.asObservable();


  constructor(private http:HttpClient) {}

  updateFournisseurData(data: fournisseur) {
    this.fournisseurData.next(data);
  }
  updateFournisseurCompleteData(data: fournisseurComplete, data1:fournisseur) {
    data.fournisseur=data1;
    this.fournisseurCompletteData.next(data);
  }
  updateFournisseurCompleteData1(data: fournisseur){
    const fournisseurComplete10:fournisseurComplete=this.fournisseurComplete1;
    fournisseurComplete10.fournisseur=data;
    this.fournisseurCompletteData.next(fournisseurComplete10);
  }

  public getfournisseurParpagination(paginationParamter:paginationParamter):Observable<any>{
    return this.http.post("http://localhost:8000/management/logged-in-user/get-suppliers-by-pagination",paginationParamter);

  }
}
