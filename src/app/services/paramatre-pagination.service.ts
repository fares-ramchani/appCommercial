import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParamatrePaginationService {
  data:number=1
  constructor() { }
  setcurentepage(data:number){
    this.data=data;
  }
  currentpage1():number {
    return this.data
  }
 
}
