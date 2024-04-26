import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { ServicefournisseurService } from "src/app/services/servicefournisseur.service";
import {
    DeletefournisseurActionsError, DeletefournisseursActions, GetAllfournisseurActions,
    GetAllfournisseurActionsError,
    GetAllfournisseurActionsSuccess,
    SavefournisseurActions,
    SavefournisseurActionsError,
    SavefournisseurActionsSuccess,
    fournisseurActions,
    fournisseurActionsTypes,
    getfournisseurbycodesActions,
    getfournisseurbycodesActionsError,
    getfournisseurbycodesActionsSuccess
} from "./fournisseur.actions";
import { ParamatrePaginationService } from "src/app/services/paramatre-pagination.service";

@Injectable()
export class fournisseurEffect {
    constructor(
        private ParamatrePaginationService:ParamatrePaginationService,
        private serviceFournisseurService: ServicefournisseurService,
        private effectActions: Actions
    ) { }

    fournisseurEffect: Observable<GetAllfournisseurActions> = createEffect(() =>
        this.effectActions.pipe(
            ofType(fournisseurActionsTypes.Get_All_fournisseur),
            mergeMap((action: GetAllfournisseurActions) => {
                return this.serviceFournisseurService.getfournisseurParpagination(action.payload).pipe(

                    map((fournisseur: any) => new GetAllfournisseurActionsSuccess(fournisseur.data)),
                    catchError((err) => of(new GetAllfournisseurActionsError(err.error.msg)))

                )

            })
        )
    );
    DeleteFournisseurEffect: Observable<fournisseurActions> = createEffect(() =>
        this.effectActions.pipe(
            ofType(fournisseurActionsTypes.delete_fournisseur),
            mergeMap((action: DeletefournisseursActions) => {
                return this.serviceFournisseurService.deletefournisseurByCode(action.payload).pipe(
                    mergeMap(() => {
                        // Dispatch GetAllfournisseurActions after successful deletion
                        const aa = { perPage: 10, page: this.ParamatrePaginationService.currentpage1() };
                        return of(new GetAllfournisseurActions(aa));
                    }),
                    catchError((err) => {
                        return of(new DeletefournisseurActionsError(err.message));
                    })
                );
            })
        )
    );
    
    SaveFournisseurEffect: Observable<fournisseurActions> = createEffect(() =>
        this.effectActions.pipe(
            ofType(fournisseurActionsTypes.Save_fournisseur),
            mergeMap((action: SavefournisseurActions) => {
                return this.serviceFournisseurService.saveFournisseur(action.payload).pipe(

                    map((fournisseur) => new SavefournisseurActionsSuccess(fournisseur)),
                    catchError((err) => of(new SavefournisseurActionsError(err.message)))

                )

            })
        )
    );
    getFournisseurByCodeEffect = createEffect(() =>
        this.effectActions.pipe(
            ofType(fournisseurActionsTypes.getfournisseur_by_code),
            mergeMap((action: getfournisseurbycodesActions) =>
                this.serviceFournisseurService.getFournisseurByCode(action.payload).pipe(
                    map((fournisseur: any) => {
                        console.log(fournisseur.data.supplier);
                        return new getfournisseurbycodesActionsSuccess(fournisseur.data.supplier);
                    }),
                    catchError((err) => of(new getfournisseurbycodesActionsError(err.error.msg)))
                )
            )
        )
    );
}

