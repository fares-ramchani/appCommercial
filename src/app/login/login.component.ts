import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { loginUser } from '../model/loginUser.model';
import { user } from '../model/user.model';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { loginState, loginStateEnume } from '../ngrx/ngrxLogin/login.reducer';
import { login_userActions } from '../ngrx/ngrxLogin/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginState$:Observable<loginState> | null=null;
  readonly loginStateEnume=loginStateEnume;
  
  formLogin!:FormGroup;
  message :any=localStorage.getItem('message')
  messagee: any;
  user!:user;
  messageerror:string=""
  
  constructor (private store:Store<any>,private httpClient: HttpClient,private fb : FormBuilder ,private ServiceloginService : LoginService,private router : Router){
    
  }
  ngOnInit(): void {
    this.formLogin=this.fb.group({
      username :this.fb.control('',Validators.required),
      password:this.fb.control('',Validators.required)
    })
    this.loginState$=this.store.pipe(
      map((state)=>state.loginReducer )
    )
    
  }
  login() {
    let userlogin: loginUser = this.formLogin.value;
    this.store.dispatch(new login_userActions(userlogin));
   
  }

  getErrorsMessage(arg0: string,error: any):string {
    if(error['required']){
      return arg0+ " obligatoir";
    }else if(error['email']){
      return "email invalid"
    }
    else if(error['min']){
      return  "telephone invalid"
    }
    else if(error['max']){
      return  "telephone invalid"
    }
    else return "";
    
  
  }
  ngOnDestroy() {
    this.loginState$=this.store.pipe(
      map((state)=>state.loginReducer.initState )
    )
    
  }
  getErrorServeur(error:any):string{
    if(error!=null){
return error.msg.value
    } else{
      return ""
    }
  }
}
