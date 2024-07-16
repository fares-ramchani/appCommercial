import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationFormulairService {

  private validationFormuliare = new BehaviorSubject<boolean>(false);
  validationFormuliare$ = this.validationFormuliare.asObservable();
  sharedData : number=0;

  constructor() { }
  setvalidationFormuliare(data:any) {
    const currentvalidationFormuliare = this.validationFormuliare.value;
    const newshowPopup = data;
    this.validationFormuliare.next(newshowPopup);
  }
  setSharedData(data:number) {
    this.sharedData = data;
}
getsharedata():any{
  return  this.sharedData;
}
}
