import { Action } from "@ngrx/store";
export enum clientActionsTypes {
    Get_All_client = "[client] Get All client",
    Get_All_client_Succeess = "[client] Get All client Success",
    Get_All_client_Error = "[client] Get All client Error",
    //delete client
    delete_client = "[client] delete client",
    delete_client_Succeess = "[client] delete client Success",
    delete_client_Error = "[client] delete client Error",
    //save client
    Save_client = "[client] Save client",
    Save_client_Succeess = "[client] save client Success",
    Save_client_Error = "[client] save client Error",
    //get client bt code
    getclient_by_code = "[client] get client by code ",
    getclient_by_code_Succeess = "[client] get client by code Success",
    getclient_by_code_Error = "[client] get client by code Error",
    //modifier client
    modifier_client = "[client] modifier client",
    modifier_client_Succeess = "[client] modifier client Success",
    modifier_client_Error = "[client] modifier client Error",
    //imprimer client
    imprimer_client = "[client] imprimer client",
    imprimer_client_Succeess = "[client] imprimer client Success",
    imprimer_client_Error = "[client] imprimer client Error",



    inisiale_state="[client] inisiale client state",


}
export class GetAllclientActions implements Action {
    type: clientActionsTypes = clientActionsTypes.Get_All_client;
    constructor(public payload: any) {

    }
}
export class GetAllclientActionsSuccess implements Action {
    type: clientActionsTypes = clientActionsTypes.Get_All_client_Succeess;
    constructor(public payload: any[]) {

    }
}
export class GetAllclientActionsError implements Action {
    type: clientActionsTypes = clientActionsTypes.Get_All_client_Error;
    constructor(public payload: string) {

    }
}
//delete client
export class getclientbycodesActions implements Action {
    type: clientActionsTypes = clientActionsTypes.getclient_by_code;
    constructor(public payload: number) {

    }
}
export class getclientbycodesActionsSuccess implements Action {
    type: clientActionsTypes = clientActionsTypes.getclient_by_code_Succeess;
    constructor(public payload: any) {

    }
}
export class getclientbycodesActionsError implements Action {
    type: clientActionsTypes = clientActionsTypes.getclient_by_code_Error;
    constructor(public payload: string) {

    }
}
//get client bt code
export class DeleteclientsActions implements Action {
    type: clientActionsTypes = clientActionsTypes.delete_client;
    constructor(public payload: number) {

    }
}
export class DeleteclientActionsSuccess implements Action {
    type: clientActionsTypes = clientActionsTypes.delete_client_Succeess;
    constructor(public payload: any) {

    }
}
export class DeleteclientActionsError implements Action {
    type: clientActionsTypes = clientActionsTypes.delete_client_Error;
    constructor(public payload: string) {

    }
}
//save client
export class SaveclientActions implements Action {
    type: clientActionsTypes = clientActionsTypes.Save_client;
    constructor(public payload: any) {

    }
}
export class SaveclientActionsSuccess implements Action {
    type: clientActionsTypes = clientActionsTypes.Save_client_Succeess;
    constructor(public payload: any) {

    }
}
export class SaveclientActionsError implements Action {
    type: clientActionsTypes = clientActionsTypes.Save_client_Error;
    constructor(public payload: string) {

    }
}
//modifier client
export class modifierclientActions implements Action {
    type: clientActionsTypes = clientActionsTypes.modifier_client;
    constructor(public payload: any) {

    }
}
export class modifierclientActionsSuccess implements Action {
    type: clientActionsTypes = clientActionsTypes.modifier_client_Succeess;
    constructor(public payload: any) {

    }
}
export class modifierclientActionsError implements Action {
    type: clientActionsTypes = clientActionsTypes.modifier_client_Error;
    constructor(public payload: string) {

    }
}
//imprimer client
export class imprimerclientActions implements Action {
    type: clientActionsTypes = clientActionsTypes.imprimer_client;
    constructor(public payload: any) {

    }
}
export class imprimerclientActionsSuccess implements Action {
    type: clientActionsTypes = clientActionsTypes.imprimer_client_Succeess;
    constructor(public payload: any) {

    }
}
export class imprimerclientActionsError implements Action {
    type: clientActionsTypes = clientActionsTypes.imprimer_client_Error;
    constructor(public payload: string) {

    }
}
export class inisialclientActions implements Action {
    type: clientActionsTypes = clientActionsTypes.inisiale_state;
    constructor(public payload: string) {

    }
}

export type clientActions =
    GetAllclientActions | GetAllclientActionsSuccess | GetAllclientActionsError |
    DeleteclientsActions | DeleteclientActionsSuccess | DeleteclientActionsError |
    SaveclientActions | SaveclientActionsSuccess | SaveclientActionsError |
    getclientbycodesActions | getclientbycodesActionsSuccess | getclientbycodesActionsError |
    modifierclientActions | modifierclientActionsSuccess | modifierclientActionsError|
    imprimerclientActions | imprimerclientActionsSuccess | imprimerclientActionsError |inisialclientActions;