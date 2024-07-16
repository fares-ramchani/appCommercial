import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowComposantAlertsupprimerService {

  private showpopup = new BehaviorSubject<boolean>(false);
  showPopup1$ = this.showpopup.asObservable();
  sharedData : number=0;

  constructor() { }
  setshowpopup() {
    const currentShowPopup = this.showpopup.value;
    const newshowPopup = !currentShowPopup;
    this.showpopup.next(newshowPopup);
  }
  setSharedData(data:number) {
    this.sharedData = data;
}
getsharedata():any{
  return  this.sharedData;
}
}