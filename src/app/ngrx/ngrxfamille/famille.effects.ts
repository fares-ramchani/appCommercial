import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { ParamatrePaginationClientService } from "src/app/services/paramatre-pagination-client.service";
import { ServicefamilleService } from "src/app/services/servicefamille.service";
import { DeletefamilleActions, DeletefamilleActionsError, GetAllfamilleActionsSuccess, GetAllfamilletActions, GetAllfamilletActionsError, SavefamilleActions, SavefamilleActionsError, SavefamilleActionsSuccess, familleActions, familleActionsTypes, getfamillebycodesActions, getfamillebycodesActionsError, getfamillebycodesActionsSuccess, imprimerfamilleActions, imprimerfamilleActionsError, imprimerfamilleActionsSuccess, modifierfamilleActions, modifierfamilleActionsError, modifierfamilleActionsSuccess } from "./famille.action";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class familleEffect {
    constructor(
        private ParamatrePaginationClientService:ParamatrePaginationClientService,
        private ServicefamilleService: ServicefamilleService,
        private toastr:ToastrService,
        private effectActions: Actions
    ) { }

    familleEffect: Observable<GetAllfamilletActions> = createEffect(() =>
        this.effectActions.pipe(
            ofType(familleActionsTypes.Get_All_famille),
            mergeMap((action: GetAllfamilletActions) => {
                return this.ServicefamilleService.getfamilleParpagination(action.payload).pipe(

                    map((famille: any) => new GetAllfamilleActionsSuccess(famille.data)),
                    catchError((err) => of(new GetAllfamilletActionsError(err.error.msg)))

                )

            })
        )
    );
    DeletefamilleEffect: Observable<familleActions> = createEffect(() =>
        this.effectActions.pipe(
            ofType(familleActionsTypes.delete_famille),
            mergeMap((action: DeletefamilleActions) => {
                return this.ServicefamilleService.deletefamilleByCode(action.payload).pipe(
                    mergeMap(() => {
                        const aa = { perPage: 10, page: 1 };
                        this.toastr.success(" Votre supprition a été effectué avec succès")
                        return of(new GetAllfamilletActions(aa));
                    }),
                    catchError((err) => {
                        return of(new DeletefamilleActionsError(err.message));
                    })
                );
            })
        )
    );
    
    SavefamilleEffect: Observable<familleActions> = createEffect(() =>
        this.effectActions.pipe(
            ofType(familleActionsTypes.Save_famille),
            mergeMap((action: SavefamilleActions) => {
                return this.ServicefamilleService.savefamille(action.payload).pipe(

                    map((famille) => new SavefamilleActionsSuccess(famille)),
                    catchError((err) => of(new SavefamilleActionsError(err.message)))

                )

            })
        )
    );
    getfamilleByCodeEffect = createEffect(() =>
        this.effectActions.pipe(
            ofType(familleActionsTypes.getfamille_by_code),
            mergeMap((action: getfamillebycodesActions) =>
                this.ServicefamilleService.getfamilleByCode(action.payload).pipe(
                    map((famille: any) => {
                        return new getfamillebycodesActionsSuccess(famille.data.family);
                    }),
                    catchError((err) => of(new getfamillebycodesActionsError(err.error.msg)))
                )
            )
        )
    );
    modifierfamilleEffect: Observable<familleActions> = createEffect(() =>
        this.effectActions.pipe(
            ofType(familleActionsTypes.modifier_famille),
            mergeMap((action: modifierfamilleActions) => {
               
                return this.ServicefamilleService.updatefamille(action.payload).pipe(

                    map((famille) => {
                        this.toastr.success("Votre modification a été effectué avec succès")
                        return new modifierfamilleActionsSuccess(famille)
                    }),
                    catchError((err) => of(new modifierfamilleActionsError(err.message)))

                )

            })
        )
    );
    imprimerfamilleEffect: Observable<familleActions> = createEffect(() =>
        this.effectActions.pipe(
            ofType(familleActionsTypes.imprimer_famille),
            mergeMap((action: imprimerfamilleActions) => {
                return this.ServicefamilleService.getdonnerImprimer(action.payload).pipe(

                    map((famille) => new imprimerfamilleActionsSuccess(famille)),
                    catchError((err) => of(new imprimerfamilleActionsError(err.message)))

                )

            })
        )
    );
}


