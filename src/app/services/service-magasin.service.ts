import { Injectable } from '@angular/core';
import { magasin } from '../model/magasin.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { paramatrePaginationClient } from '../model/paramatrePaginationClient.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceMagasinService {

  magasin: magasin = {
    store: 0,
    storeLabel: ""
  }
  private cleinttData = new BehaviorSubject<magasin | magasin>(this.magasin);
  magasinData$ = this.cleinttData.asObservable();


  constructor(private http: HttpClient) { }

  updatemagasinData(data: magasin) {
    this.cleinttData.next(data);
  }
  public getmagasinParpagination(paramatrePagination: paramatrePaginationClient): Observable<any> {
    return this.http.post("http://localhost:8000/management/logged-in-user/get-stores-by-pagination", paramatrePagination);

  }
  public deletemagasinByCode(codemagasin: number): Observable<any> {
    return this.http.delete<any>("http://localhost:8000/management/logged-in-user/delete-store/" + codemagasin);
  }
  public savemagasin(magasin: any): Observable<any> {
    return this.http.post<any>("http://localhost:8000/management/logged-in-user/create-store", magasin);
  }
  public getmagasinByCode(codemagasin: number): Observable<any> {
    return this.http.get<any>("http://localhost:8000/management/logged-in-user/get-store/" + codemagasin);
  }
  public updatemagasin(magasin: any): Observable<any> {
    return this.http.put<any>("http://localhost:8000/management/logged-in-user/update-store/" + magasin.store, magasin);

  }
  public getdonnerImprimer(donnerimprimer: any): Observable<any> {
    return this.http.post<any>("http://localhost:8000/management/logged-in-user/printing-clients", donnerimprimer);
  }
}
