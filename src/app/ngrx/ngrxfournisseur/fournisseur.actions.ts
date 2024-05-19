import { Action } from "@ngrx/store";

export enum fournisseurActionsTypes {
    Get_All_fournisseur = "[fournisseur] Get All fournisseur",
    Get_All_fournisseur_Succeess = "[fournisseur] Get All fournisseur Success",
    Get_All_fournisseur_Error = "[fournisseur] Get All fournisseur Error",
    //delete fournisseur
    delete_fournisseur = "[fournisseur] delete fournisseur",
    delete_fournisseur_Succeess = "[fournisseur] delete fournisseur Success",
    delete_fournisseur_Error = "[fournisseur] delete fournisseur Error",
    //save fournisseur
    Save_fournisseur = "[fournisseur] Save fournisseur",
    Save_fournisseur_Succeess = "[fournisseur] save fournisseur Success",
    Save_fournisseur_Error = "[fournisseur] save fournisseur Error",
    //get fournisseur bt code
    getfournisseur_by_code = "[fournisseur] get fournisseur by code ",
    getfournisseur_by_code_Succeess = "[fournisseur] get fournisseur by code Success",
    getfournisseur_by_code_Error = "[fournisseur] get fournisseur by code Error",
    //modifier fournisseur
    modifier_fournisseur = "[fournisseur] modifier fournisseur",
    modifier_fournisseur_Succeess = "[fournisseur] modifier fournisseur Success",
    modifier_fournisseur_Error = "[fournisseur] modifier fournisseur Error",
    //imprimer fournisseur
    imprimer_fournisseur = "[fournisseur] imprimer fournisseur",
    imprimer_fournisseur_Succeess = "[fournisseur] imprimer fournisseur Success",
    imprimer_fournisseur_Error = "[fournisseur] imprimer fournisseur Error",

    inisiale_state="[fournisseur] inisiale fournisseur state",



}
export class GetAllfournisseurActions implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.Get_All_fournisseur;
    constructor(public payload: any) {

    }
}
export class GetAllfournisseurActionsSuccess implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.Get_All_fournisseur_Succeess;
    constructor(public payload: any[]) {

    }
}
export class GetAllfournisseurActionsError implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.Get_All_fournisseur_Error;
    constructor(public payload: string) {

    }
}
//delete fournisseur
export class getfournisseurbycodesActions implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.getfournisseur_by_code;
    constructor(public payload: number) {

    }
}
export class getfournisseurbycodesActionsSuccess implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.getfournisseur_by_code_Succeess;
    constructor(public payload: any) {

    }
}
export class getfournisseurbycodesActionsError implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.getfournisseur_by_code_Error;
    constructor(public payload: string) {

    }
}
//get fournisseur bt code
export class DeletefournisseursActions implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.delete_fournisseur;
    constructor(public payload: number) {

    }
}
export class DeletefournisseurActionsSuccess implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.delete_fournisseur_Succeess;
    constructor(public payload: any) {

    }
}
export class DeletefournisseurActionsError implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.delete_fournisseur_Error;
    constructor(public payload: string) {

    }
}
//save fournisseur
export class SavefournisseurActions implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.Save_fournisseur;
    constructor(public payload: any) {

    }
}
export class SavefournisseurActionsSuccess implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.Save_fournisseur_Succeess;
    constructor(public payload: any) {

    }
}
export class SavefournisseurActionsError implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.Save_fournisseur_Error;
    constructor(public payload: string) {

    }
}
//modifier fournniseur
export class modifierfournisseurActions implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.modifier_fournisseur;
    constructor(public payload: any) {

    }
}
export class modifierfournisseurActionsSuccess implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.modifier_fournisseur_Succeess;
    constructor(public payload: any) {

    }
}
export class modifierfournisseurActionsError implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.modifier_fournisseur_Error;
    constructor(public payload: string) {

    }
}
//imprimer fournniseur
export class imprimerfournisseurActions implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.imprimer_fournisseur;
    constructor(public payload: any) {

    }
}
export class imprimerfournisseurActionsSuccess implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.imprimer_fournisseur_Succeess;
    constructor(public payload: any) {

    }
}
export class imprimerfournisseurActionsError implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.imprimer_fournisseur_Error;
    constructor(public payload: string) {

    }
}
export class inisialfournisseurActions implements Action {
    type: fournisseurActionsTypes = fournisseurActionsTypes.inisiale_state;
    constructor(public payload: string) {

    }
}

export type fournisseurActions =
    GetAllfournisseurActions | GetAllfournisseurActionsSuccess | GetAllfournisseurActionsError |
    DeletefournisseursActions | DeletefournisseurActionsSuccess | DeletefournisseurActionsError |
    SavefournisseurActions | SavefournisseurActionsSuccess | SavefournisseurActionsError |
    getfournisseurbycodesActions | getfournisseurbycodesActionsSuccess | getfournisseurbycodesActionsError |
    modifierfournisseurActions | modifierfournisseurActionsSuccess | modifierfournisseurActionsError|
    imprimerfournisseurActions | imprimerfournisseurActionsSuccess |imprimerfournisseurActionsError |inisialfournisseurActions;