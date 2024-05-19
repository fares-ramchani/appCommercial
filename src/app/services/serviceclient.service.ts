import { Injectable } from '@angular/core';
import { client } from '../model/client.model';
import { clientComplete } from '../model/clientComplete.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { paramatrePaginationClient } from '../model/paramatrePaginationClient.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceclientService {
  client1:client={
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
    clientComplete1:clientComplete={
      code: 0,
      companyName : "",
      abbreviation: "",
      maxCredit: 0,
      maxTerms: 0,
      inProgress: false,
      client:this.client1}
  

      private clientData = new BehaviorSubject<client | client>(this.client1);
      clientData$ = this.clientData.asObservable();
    
    
    
      private clientCompleteData = new BehaviorSubject<clientComplete | clientComplete>(this.clientComplete1);
      clientCompleteData$ = this.clientCompleteData.asObservable();
    
    
      constructor(private http:HttpClient) {}
    
      updateclientData(data: client) {
        this.clientData.next(data);
      }
      updateclientCompleteData(data: clientComplete, data1:client) {
        data.client=data1;
        this.clientCompleteData.next(data);
      }
      updateclientCompleteData1(data: client,data1:clientComplete |null){
        const clientComplete10:clientComplete |null=data1;
        if(clientComplete10){
          clientComplete10.client=data;
          this.clientCompleteData.next(clientComplete10);
        }
        
      }
      public getfournisseurParpagination(paramatrePaginationClient:paramatrePaginationClient):Observable<any>{
        return this.http.post("http://localhost:8000/management/logged-in-user/get-clients-by-pagination",paramatrePaginationClient);
    
      }
      public deletefournisseurByCode(codeclient:number):Observable<any>{
        return this.http.delete<any>("http://localhost:8000/management/logged-in-user/delete-client/"+codeclient);
      }
      public saveFournisseur(client:any):Observable<any>{
        return this.http.post<any>("http://localhost:8000/management/logged-in-user/create-client",client);
      }
      public getFournisseurByCode(codeclient:number):Observable<any>{
        return this.http.get<any>("http://localhost:8000/management/logged-in-user/get-client/"+codeclient);
      }
      public updateFournisseur(client:any):Observable<any>{
        return this.http.put<any>("http://localhost:8000/management/logged-in-user/update-client/"+client.code,client);
      
      }
      public getdonnerImprimer(donnerimprimer:any):Observable<any>{
        return this.http.post<any>("http://localhost:8000/management/logged-in-user/printing-clients",donnerimprimer);
      }
}
