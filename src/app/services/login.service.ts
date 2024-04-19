import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginUser } from '../model/loginUser.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isConnecter:boolean=false;

  constructor(private http:HttpClient) { }
  public login(loginUser:loginUser):Observable<any>{
    return this.http.post("http://localhost:8000/management/signin",loginUser);
  }
  connecter(){
    this.isConnecter = true;
  }
  deconnecter(){
    this.isConnecter = false;
  }
}
