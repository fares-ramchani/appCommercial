import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import {usere } from "src/app/model/user.model";
import { LoginService } from "src/app/services/login.service";
import { loginActionsTypes, login_userActions, login_userActionsError, login_userActionsSuccess } from "./login.actions";
import { Router } from "@angular/router";

@Injectable()
export class loginEffects {
    constructor(private router:Router,private ServiceloginService: LoginService, private effectActions: Actions) {
    }
    loginEffect: Observable<login_userActions > = createEffect(() =>
        this.effectActions.pipe(
            ofType(loginActionsTypes.login_user),
            mergeMap((action: login_userActions) =>
                this.ServiceloginService.login(action.payload).pipe(
                    mergeMap((usere: usere) => {
                        localStorage.setItem("token", usere.data.token);
                        localStorage.setItem("username", usere.data.user.username);
                        localStorage.setItem("role", usere.data.user.role);
                        return this.router.navigate(['/menuprincipale']).then(() => {
                            return new login_userActionsSuccess(usere);
                        });
                    }),
                    catchError((err) => of(new login_userActionsError(err.error.msg)))
                )
            )   
        )
    );
}