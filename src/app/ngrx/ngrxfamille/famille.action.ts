import { Action } from "@ngrx/store";
export enum familleActionsTypes {
    Get_All_famille = "[famille] Get All famille",
    Get_All_famille_Succeess = "[famille] Get All famille Success",
    Get_All_famille_Error = "[famille] Get All famille Error",
    //delete famille
    delete_famille = "[famille] delete famille",
    delete_famille_Succeess = "[famille] delete famille Success",
    delete_famille_Error = "[famille] delete famille Error",
    //save famille
    Save_famille = "[famille] Save famille",
    Save_famille_Succeess = "[famille] save famille Success",
    Save_famille_Error = "[famille] save famille Error",
    //get famille bt code
    getfamille_by_code = "[famille] get famille by code ",
    getfamille_by_code_Succeess = "[famille] get famille by code Success",
    getfamille_by_code_Error = "[famille] get famille by code Error",
    //modifier famille
    modifier_famille = "[famille] modifier famille",
    modifier_famille_Succeess = "[famille] modifier famille Success",
    modifier_famille_Error = "[famille] modifier famille Error",
    //imprimer famille
    imprimer_famille = "[famille] imprimer famille",
    imprimer_famille_Succeess = "[famille] imprimer famille Success",
    imprimer_famille_Error = "[famille] imprimer famille Error",



    inisiale_state="[famille] inisiale famille state",


}
export class GetAllfamilletActions implements Action {
    type: familleActionsTypes = familleActionsTypes.Get_All_famille;
    constructor(public payload: any) {

    }
}
export class GetAllfamilleActionsSuccess implements Action {
    type: familleActionsTypes = familleActionsTypes.Get_All_famille_Succeess;
    constructor(public payload: any[]) {

    }
}
export class GetAllfamilletActionsError implements Action {
    type: familleActionsTypes = familleActionsTypes.Get_All_famille_Error;
    constructor(public payload: string) {

    }
}
//delete famille
export class getfamillebycodesActions implements Action {
    type: familleActionsTypes = familleActionsTypes.getfamille_by_code;
    constructor(public payload: number) {

    }
}
export class getfamillebycodesActionsSuccess implements Action {
    type: familleActionsTypes = familleActionsTypes.getfamille_by_code_Succeess;
    constructor(public payload: any) {

    }
}
export class getfamillebycodesActionsError implements Action {
    type: familleActionsTypes = familleActionsTypes.getfamille_by_code_Error;
    constructor(public payload: string) {

    }
}
//get famille bt code
export class DeletefamilleActions implements Action {
    type: familleActionsTypes = familleActionsTypes.delete_famille;
    constructor(public payload: number) {

    }
}
export class DeletefamilleActionsSuccess implements Action {
    type: familleActionsTypes = familleActionsTypes.delete_famille_Succeess;
    constructor(public payload: any) {

    }
}
export class DeletefamilleActionsError implements Action {
    type: familleActionsTypes = familleActionsTypes.delete_famille_Error;
    constructor(public payload: string) {

    }
}
//save famille
export class SavefamilleActions implements Action {
    type: familleActionsTypes = familleActionsTypes.Save_famille;
    constructor(public payload: any) {

    }
}
export class SavefamilleActionsSuccess implements Action {
    type: familleActionsTypes = familleActionsTypes.Save_famille_Succeess;
    constructor(public payload: any) {

    }
}
export class SavefamilleActionsError implements Action {
    type: familleActionsTypes = familleActionsTypes.Save_famille_Error;
    constructor(public payload: string) {

    }
}
//modifier famille
export class modifierfamilleActions implements Action {
    type: familleActionsTypes = familleActionsTypes.modifier_famille;
    constructor(public payload: any) {

    }
}
export class modifierfamilleActionsSuccess implements Action {
    type: familleActionsTypes = familleActionsTypes.modifier_famille_Succeess;
    constructor(public payload: any) {

    }
}
export class modifierfamilleActionsError implements Action {
    type: familleActionsTypes = familleActionsTypes.modifier_famille_Error;
    constructor(public payload: string) {

    }
}
//imprimer famille
export class imprimerfamilleActions implements Action {
    type: familleActionsTypes = familleActionsTypes.imprimer_famille;
    constructor(public payload: any) {

    }
}
export class imprimerfamilleActionsSuccess implements Action {
    type: familleActionsTypes = familleActionsTypes.imprimer_famille_Succeess;
    constructor(public payload: any) {

    }
}
export class imprimerfamilleActionsError implements Action {
    type: familleActionsTypes = familleActionsTypes.imprimer_famille_Error;
    constructor(public payload: string) {

    }
}
export class inisialfamilleActions implements Action {
    type: familleActionsTypes = familleActionsTypes.inisiale_state;
    constructor(public payload: string) {

    }
}

export type familleActions =
    GetAllfamilletActions | GetAllfamilleActionsSuccess | GetAllfamilletActionsError |
    DeletefamilleActions | DeletefamilleActionsSuccess | DeletefamilleActionsError |
    SavefamilleActions | SavefamilleActionsSuccess | SavefamilleActionsError |
    getfamillebycodesActions | getfamillebycodesActionsSuccess | getfamillebycodesActionsError |
    modifierfamilleActions | modifierfamilleActionsSuccess | modifierfamilleActionsError|
    imprimerfamilleActions | imprimerfamilleActionsSuccess | imprimerfamilleActionsError |inisialfamilleActions;