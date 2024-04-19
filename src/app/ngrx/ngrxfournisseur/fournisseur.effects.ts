import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { ServicefournisseurService } from "src/app/services/servicefournisseur.service";
import { DeletefournisseurActionsError, DeletefournisseursActions, GetAllfournisseurActions, 
    GetAllfournisseurActionsError, 
    GetAllfournisseurActionsSuccess, 
    fournisseurActions, 
    fournisseurActionsTypes 
} from "./fournisseur.actions";

@Injectable()
export class fournisseurEffect {
    constructor(
        private serviceFournisseurService: ServicefournisseurService,
        private effectActions: Actions
    ) {}

    fournisseurEffect:Observable<GetAllfournisseurActions>=createEffect(()=>
        this.effectActions.pipe(
            ofType(fournisseurActionsTypes.Get_All_fournisseur),
            mergeMap((action: GetAllfournisseurActions)=>{
                return this.serviceFournisseurService.getfournisseurParpagination(action.payload).pipe(
                
                    map((fournisseur: any)=> new GetAllfournisseurActionsSuccess(fournisseur.data.suppliers)),
                    catchError((err)=>of(new GetAllfournisseurActionsError(err.error.msg)))
                    
                )
        
            })
        )
        );
        DeleteFournisseurEffect:Observable<fournisseurActions>=createEffect(()=>
            this.effectActions.pipe(
                ofType(fournisseurActionsTypes.delete_fournisseur),
                mergeMap((action:DeletefournisseursActions)=>{
                    return this.serviceFournisseurService.deletefournisseurByCode(action.payload).pipe(
                    
                        map((bornes)=> new GetAllfournisseurActions(bornes)),
                        catchError((err)=>of(new DeletefournisseurActionsError(err.message)))
                        
                    )
            
                })
            )
            );
    }

