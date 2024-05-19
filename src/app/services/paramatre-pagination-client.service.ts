import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamatrePaginationClientService {

  data:number=1
  constructor() { }
  setcurentepage(data:number){
    this.data=data;
  }
  currentpage1():number {
    return this.data
  }
}
