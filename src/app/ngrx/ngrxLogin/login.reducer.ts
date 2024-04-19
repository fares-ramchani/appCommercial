import { Action } from "@ngrx/store"
import { loginActionsTypes, login_userActions } from "./login.actions"
import { usere } from "src/app/model/user.model"

export enum loginStateEnume{
    LOADING="loading",
    LOADED="loaded",
    ERROR="error",
    INITIAL="initial"
}



export interface loginState{
    usere:usere,
    errorMessage:string,
    dataState:loginStateEnume
}


const initState:loginState={
    usere:{msg:"",success:false,data:{admins:[],_id:"",username:"",password:"",user:null,role:"",token:""}},
    errorMessage:"",
    dataState:loginStateEnume.INITIAL
}
export function loginReducer(state=initState,action:Action):loginState{

    switch(action.type){
        case loginActionsTypes.login_user:
                return {...state,dataState:loginStateEnume.LOADING}
        case loginActionsTypes.login_user_Succeess:
                return{...state,dataState:loginStateEnume.LOADED,usere:(<login_userActions>action).payload }
        case loginActionsTypes.login_user_Error:
                return{...state,dataState:loginStateEnume.ERROR,errorMessage:(<login_userActions>action).payload}
        default : return{...state,dataState:loginStateEnume.INITIAL}
    }
}