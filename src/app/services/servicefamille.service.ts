import { Injectable } from '@angular/core';
import { famille } from '../model/famille.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { paramatrePaginationClient } from '../model/paramatrePaginationClient.model';

@Injectable({
  providedIn: 'root'
})
export class ServicefamilleService {

  famille: famille = {
    code:0,
    familyLabel:"",
    isProfitMargin:false,
    priceCalculationOn:"",
    minimumViablePriceOn:"",
    purchase:0,
    fees:0,
    fixedFees:0,
    profitMargin:0,
    isProfitMarginPlusFees:false,
    fodec:0,
    tva:0,
    isSubjectToVAT:false,
    cict:0,
    minimumMargin:0,
    margin2:{},
    margin3:{},
    margin4:{},
    margin5:{},
    accountingAccount:"",
    accountTitle:"",
  }
  private familleData = new BehaviorSubject<famille | famille>(this.famille);
  familleData$ = this.familleData.asObservable();


  constructor(private http: HttpClient) { }

  updatefamilleData(data: famille) {
    this.familleData.next(data);
  }
  public getfamilleParpagination(paramatrePagination: paramatrePaginationClient): Observable<any> {
    return this.http.post("http://localhost:8000/management/logged-in-user/get-families-by-pagination", paramatrePagination);

  }
  public deletefamilleByCode(codefamille: number): Observable<any> {
    return this.http.delete<any>("http://localhost:8000/management/logged-in-user/delete-family/" + codefamille);
  }
  public savefamille(famille: any): Observable<any> {
    return this.http.post<any>("http://localhost:8000/management/logged-in-user/create-family", famille);
  }
  public getfamilleByCode(codefamille: number): Observable<any> {
    return this.http.get<any>("http://localhost:8000/management/logged-in-user/get-family/" + codefamille);
  }
  public updatefamille(famille: any): Observable<any> {
    return this.http.put<any>("http://localhost:8000/management/logged-in-user/update-family/" + famille.code, famille);

  }
  public getdonnerImprimer(donnerimprimer: any): Observable<any> {
    return this.http.post<any>("http://localhost:8000/management/logged-in-user/printing-clients", donnerimprimer);
  }
}
