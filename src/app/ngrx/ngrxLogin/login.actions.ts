import { Router } from "@angular/router";
import { Action } from "@ngrx/store";
import { user } from "src/app/model/user.model";
export enum loginActionsTypes{
    login_user="[login] login user",
    login_user_Succeess="[login] login user Success",
    login_user_Error="[login] login user Error",
}
export class  login_userActions implements Action{
    type: loginActionsTypes=loginActionsTypes. login_user;
    constructor(public payload:any){

    } 
}
export class  login_userActionsSuccess implements Action{
    type: loginActionsTypes=loginActionsTypes. login_user_Succeess;
    constructor(public payload:user){

    }
}
export class  login_userActionsError implements Action{
    type: loginActionsTypes=loginActionsTypes. login_user_Error;
    constructor(public payload:string){

    }
}
export type  loginuserActions=
login_userActions |  login_userActionsSuccess | login_userActionsError
;