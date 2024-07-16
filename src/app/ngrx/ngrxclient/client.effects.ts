import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { ParamatrePaginationClientService } from "src/app/services/paramatre-pagination-client.service";
import { ServiceclientService } from "src/app/services/serviceclient.service";
import { DeleteclientActionsError, DeleteclientsActions, GetAllclientActions, GetAllclientActionsError, GetAllclientActionsSuccess, SaveclientActions, SaveclientActionsError, SaveclientActionsSuccess, clientActions, clientActionsTypes, getclientbycodesActions, getclientbycodesActionsError, getclientbycodesActionsSuccess, imprimerclientActions, imprimerclientActionsError, imprimerclientActionsSuccess, modifierclientActions, modifierclientActionsError, modifierclientActionsSuccess } from "./client.actions";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class clientEffect {
    constructor(
        private ParamatrePaginationClientService:ParamatrePaginationClientService,
        private ServiceclientService: ServiceclientService,
        private toastr:ToastrService,
        private effectActions: Actions
    ) { }

    clientEffect: Observable<GetAllclientActions> = createEffect(() =>
        this.effectActions.pipe(
            ofType(clientActionsTypes.Get_All_client),
            mergeMap((action: GetAllclientActions) => {
                return this.ServiceclientService.getfournisseurParpagination(action.payload).pipe(

                    map((client: any) => new GetAllclientActionsSuccess(client.data)),
                    catchError((err) => of(new GetAllclientActionsError(err.error.msg)))

                )

            })
        )
    );
    DeleteclientEffect: Observable<clientActions> = createEffect(() =>
        this.effectActions.pipe(
            ofType(clientActionsTypes.delete_client),
            mergeMap((action: DeleteclientsActions) => {
                return this.ServiceclientService.deletefournisseurByCode(action.payload).pipe(
                    mergeMap(() => {
                        const aa = { perPage: 10, page: this.ParamatrePaginationClientService.currentpage1() };
                        this.toastr.success(" Votre supprition a été effectué avec succès")
                        return of(new GetAllclientActions(aa));
                    }),
                    catchError((err) => {
                        return of(new DeleteclientActionsError(err.message));
                    })
                );
            })
        )
    );
    
    SaveclientEffect: Observable<clientActions> = createEffect(() =>
        this.effectActions.pipe(
            ofType(clientActionsTypes.Save_client),
            mergeMap((action: SaveclientActions) => {
                return this.ServiceclientService.saveFournisseur(action.payload).pipe(

                    map((client) => new SaveclientActionsSuccess(client)),
                    catchError((err) => of(new SaveclientActionsError(err.message)))

                )

            })
        )
    );
    getclientByCodeEffect = createEffect(() =>
        this.effectActions.pipe(
            ofType(clientActionsTypes.getclient_by_code),
            mergeMap((action: getclientbycodesActions) =>
                this.ServiceclientService.getFournisseurByCode(action.payload).pipe(
                    map((client: any) => {
                        return new getclientbycodesActionsSuccess(client.data.client);
                    }),
                    catchError((err) => of(new getclientbycodesActionsError(err.error.msg)))
                )
            )
        )
    );
    modifierclientEffect: Observable<clientActions> = createEffect(() =>
        this.effectActions.pipe(
            ofType(clientActionsTypes.modifier_client),
            mergeMap((action: modifierclientActions) => {
  
                return this.ServiceclientService.updateFournisseur(action.payload).pipe(

                    map((client) => {
                        this.toastr.success("Votre modification a été effectué avec succès")
                        return new modifierclientActionsSuccess(client)
                    }),
                    catchError((err) => of(new modifierclientActionsError(err.message)))

                )

            })
        )
    );
    imprimerclientEffect: Observable<clientActions> = createEffect(() =>
        this.effectActions.pipe(
            ofType(clientActionsTypes.imprimer_client),
            mergeMap((action: imprimerclientActions) => {
                return this.ServiceclientService.getdonnerImprimer(action.payload).pipe(

                    map((fournisseur) => new imprimerclientActionsSuccess(fournisseur)),
                    catchError((err) => of(new imprimerclientActionsError(err.message)))

                )

            })
        )
    );
}


