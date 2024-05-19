import { Action } from "@ngrx/store";
export enum magasinActionsTypes {
    Get_All_magasin = "[magasin] Get All magasin",
    Get_All_magasin_Succeess = "[magasin] Get All magasin Success",
    Get_All_magasin_Error = "[magasin] Get All magasin Error",
    //delete magasin
    delete_magasin = "[magasin] delete magasin",
    delete_magasin_Succeess = "[magasin] delete magasin Success",
    delete_magasin_Error = "[magasin] delete magasin Error",
    //save magasin
    Save_magasin = "[magasin] Save magasin",
    Save_magasin_Succeess = "[magasin] save magasin Success",
    Save_magasin_Error = "[magasin] save magasin Error",
    //get magasin bt code
    getmagasin_by_code = "[magasin] get magasin by code ",
    getmagasin_by_code_Succeess = "[magasin] get magasin by code Success",
    getmagasin_by_code_Error = "[magasin] get magasin by code Error",
    //modifier magasin
    modifier_magasin = "[magasin] modifier magasin",
    modifier_magasin_Succeess = "[magasin] modifier magasin Success",
    modifier_magasin_Error = "[magasin] modifier magasin Error",
    //imprimer magasin
    imprimer_magasin = "[magasin] imprimer magasin",
    imprimer_magasin_Succeess = "[magasin] imprimer magasin Success",
    imprimer_magasin_Error = "[magasin] imprimer magasin Error",



    inisiale_state="[magasin] inisiale magasin state",


}
export class GetAllmagasintActions implements Action {
    type: magasinActionsTypes = magasinActionsTypes.Get_All_magasin;
    constructor(public payload: any) {

    }
}
export class GetAllmagasinActionsSuccess implements Action {
    type: magasinActionsTypes = magasinActionsTypes.Get_All_magasin_Succeess;
    constructor(public payload: any[]) {

    }
}
export class GetAllmagasintActionsError implements Action {
    type: magasinActionsTypes = magasinActionsTypes.Get_All_magasin_Error;
    constructor(public payload: string) {

    }
}
//delete magasin
export class getmagasinbycodesActions implements Action {
    type: magasinActionsTypes = magasinActionsTypes.getmagasin_by_code;
    constructor(public payload: number) {

    }
}
export class getmagasinbycodesActionsSuccess implements Action {
    type: magasinActionsTypes = magasinActionsTypes.getmagasin_by_code_Succeess;
    constructor(public payload: any) {

    }
}
export class getmagasinbycodesActionsError implements Action {
    type: magasinActionsTypes = magasinActionsTypes.getmagasin_by_code_Error;
    constructor(public payload: string) {

    }
}
//get magasin bt code
export class DeletemagasinsActions implements Action {
    type: magasinActionsTypes = magasinActionsTypes.delete_magasin;
    constructor(public payload: number) {

    }
}
export class DeletemagasinActionsSuccess implements Action {
    type: magasinActionsTypes = magasinActionsTypes.delete_magasin_Succeess;
    constructor(public payload: any) {

    }
}
export class DeletemagasinActionsError implements Action {
    type: magasinActionsTypes = magasinActionsTypes.delete_magasin_Error;
    constructor(public payload: string) {

    }
}
//save magasin
export class SavemagasinActions implements Action {
    type: magasinActionsTypes = magasinActionsTypes.Save_magasin;
    constructor(public payload: any) {

    }
}
export class SavemagasinActionsSuccess implements Action {
    type: magasinActionsTypes = magasinActionsTypes.Save_magasin_Succeess;
    constructor(public payload: any) {

    }
}
export class SavemagasinActionsError implements Action {
    type: magasinActionsTypes = magasinActionsTypes.Save_magasin_Error;
    constructor(public payload: string) {

    }
}
//modifier magasin
export class modifiermagasinActions implements Action {
    type: magasinActionsTypes = magasinActionsTypes.modifier_magasin;
    constructor(public payload: any) {

    }
}
export class modifiermagasinActionsSuccess implements Action {
    type: magasinActionsTypes = magasinActionsTypes.modifier_magasin_Succeess;
    constructor(public payload: any) {

    }
}
export class modifiermagasinActionsError implements Action {
    type: magasinActionsTypes = magasinActionsTypes.modifier_magasin_Error;
    constructor(public payload: string) {

    }
}
//imprimer magasin
export class imprimermagasinActions implements Action {
    type: magasinActionsTypes = magasinActionsTypes.imprimer_magasin;
    constructor(public payload: any) {

    }
}
export class imprimermagasinActionsSuccess implements Action {
    type: magasinActionsTypes = magasinActionsTypes.imprimer_magasin_Succeess;
    constructor(public payload: any) {

    }
}
export class imprimermagasinActionsError implements Action {
    type: magasinActionsTypes = magasinActionsTypes.imprimer_magasin_Error;
    constructor(public payload: string) {

    }
}
export class inisialmagasinActions implements Action {
    type: magasinActionsTypes = magasinActionsTypes.inisiale_state;
    constructor(public payload: string) {

    }
}

export type magasinActions =
    GetAllmagasintActions | GetAllmagasinActionsSuccess | GetAllmagasintActionsError |
    DeletemagasinsActions | DeletemagasinActionsSuccess | DeletemagasinActionsError |
    SavemagasinActions | SavemagasinActionsSuccess | SavemagasinActionsError |
    getmagasinbycodesActions | getmagasinbycodesActionsSuccess | getmagasinbycodesActionsError |
    modifiermagasinActions | modifiermagasinActionsSuccess | modifiermagasinActionsError|
    imprimermagasinActions | imprimermagasinActionsSuccess | imprimermagasinActionsError |inisialmagasinActions;