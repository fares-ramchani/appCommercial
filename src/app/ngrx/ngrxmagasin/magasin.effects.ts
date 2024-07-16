import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { ParamatrePaginationClientService } from "src/app/services/paramatre-pagination-client.service";
import { ServiceMagasinService } from "src/app/services/service-magasin.service";
import { DeletemagasinActionsError, DeletemagasinsActions, GetAllmagasinActionsSuccess, GetAllmagasintActions, GetAllmagasintActionsError, SavemagasinActions, SavemagasinActionsError, SavemagasinActionsSuccess, getmagasinbycodesActions, getmagasinbycodesActionsError, getmagasinbycodesActionsSuccess, imprimermagasinActions, imprimermagasinActionsError, imprimermagasinActionsSuccess, magasinActions, magasinActionsTypes, modifiermagasinActions, modifiermagasinActionsError, modifiermagasinActionsSuccess } from "./magasin.action";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class magasinEffect {
    constructor(
        private ParamatrePaginationClientService:ParamatrePaginationClientService,
        private ServiceMagasinService: ServiceMagasinService,
        private effectActions: Actions,
        private toastr:ToastrService
    ) { }

    magasinEffect: Observable<GetAllmagasintActions> = createEffect(() =>
        this.effectActions.pipe(
            ofType(magasinActionsTypes.Get_All_magasin),
            mergeMap((action: GetAllmagasintActions) => {
                return this.ServiceMagasinService.getmagasinParpagination(action.payload).pipe(

                    map((magasin: any) => new GetAllmagasinActionsSuccess(magasin.data)),
                    catchError((err) => of(new GetAllmagasintActionsError(err.status)))

                )

            })
        )
    );
    DeletemagasinEffect: Observable<magasinActions> = createEffect(() =>
        this.effectActions.pipe(
            ofType(magasinActionsTypes.delete_magasin),
            mergeMap((action: DeletemagasinsActions) => {
                
                return this.ServiceMagasinService.deletemagasinByCode(action.payload).pipe(
                    mergeMap(() => {
                        const aa = { perPage: 10, page: 1 };
                        this.toastr.success(" Votre supprition a été effectué avec succès")
                        return of(new GetAllmagasintActions(aa));
                    }),
                    catchError((err) => {
                        return of(new DeletemagasinActionsError(err.message));
                    })
                );
            })
        )
    );
    
    SavemagasinEffect: Observable<magasinActions> = createEffect(() =>
        this.effectActions.pipe(
            ofType(magasinActionsTypes.Save_magasin),
            mergeMap((action: SavemagasinActions) => {
                return this.ServiceMagasinService.savemagasin(action.payload).pipe(

                    map((magasin) => new SavemagasinActionsSuccess(magasin)),
                    catchError((err) => of(new SavemagasinActionsError(err.message)))

                )

            })
        )
    );
    getmagasinByCodeEffect = createEffect(() =>
        this.effectActions.pipe(
            ofType(magasinActionsTypes.getmagasin_by_code),
            mergeMap((action: getmagasinbycodesActions) =>
                this.ServiceMagasinService.getmagasinByCode(action.payload).pipe(
                    map((magasin: any) => {
                        return new getmagasinbycodesActionsSuccess(magasin.data.store);
                    }),
                    catchError((err) => of(new getmagasinbycodesActionsError(err.status)))
                )
            )
        )
    );
    modifiermagasinEffect: Observable<magasinActions> = createEffect(() =>
        this.effectActions.pipe(
            ofType(magasinActionsTypes.modifier_magasin),
            mergeMap((action: modifiermagasinActions) => {
          

                return this.ServiceMagasinService.updatemagasin(action.payload).pipe(

                    map((magasin) => {
                        this.toastr.success("Votre modification a été effectué avec succès")
                       return new modifiermagasinActionsSuccess(magasin)
                    }),
                    catchError((err) => of(new modifiermagasinActionsError(err.message)))

                )

            })
        )
    );
    imprimermagasinEffect: Observable<magasinActions> = createEffect(() =>
        this.effectActions.pipe(
            ofType(magasinActionsTypes.imprimer_magasin),
            mergeMap((action: imprimermagasinActions) => {
                return this.ServiceMagasinService.getdonnerImprimer(action.payload).pipe(

                    map((magasin) => new imprimermagasinActionsSuccess(magasin)),
                    catchError((err) => of(new imprimermagasinActionsError(err.message)))

                )

            })
        )
    );
}


