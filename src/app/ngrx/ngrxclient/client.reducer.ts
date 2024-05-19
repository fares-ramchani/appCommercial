import { Action } from "@ngrx/store"
import { GetAllclientActions, clientActions, clientActionsTypes } from "./client.actions"
export enum clientStateEnume {
    LOADING = "loading",
    LOADED = "loaded",
    ffff = "ffff",
    ERROR = "error",
    INITIAL = "initial"
}
export interface clientState {
    client: any,
    four: any,
    count: any,
    errorMessage: string,
    dataState: clientStateEnume
}
export interface clientStateModifier {
    client: any,
    four: any,
    count: any,
    errorMessage: string,
    dataState: clientStateEnume
}
const initState: clientState = {
    client: null,
    four: null,
    count: null,
    errorMessage: "",
    dataState: clientStateEnume.INITIAL
}
const initStateModifier: clientStateModifier = {
    client: null,
    four: null,
    count: null,
    errorMessage: "",
    dataState: clientStateEnume.INITIAL
}
export function clientReducer(state = initState, action: Action): clientState {

    switch (action.type) {
        case clientActionsTypes.Get_All_client:
            return { ...state, dataState: clientStateEnume.LOADING }
        case clientActionsTypes.Get_All_client_Succeess:
            return { ...state, dataState: clientStateEnume.LOADED, client: (<GetAllclientActions>action).payload, four: null }
        case clientActionsTypes.Get_All_client_Error:
            return { ...state, dataState: clientStateEnume.ERROR, errorMessage: (<GetAllclientActions>action).payload }
        case clientActionsTypes.delete_client:
            return { ...state, dataState: clientStateEnume.LOADING }
        case clientActionsTypes.delete_client_Succeess:
            return { ...state, dataState: clientStateEnume.LOADED, client: (<clientActions>action).payload }
        case clientActionsTypes.delete_client_Error:
            return { ...state, dataState: clientStateEnume.ERROR, errorMessage: (<clientActions>action).payload }
        case clientActionsTypes.getclient_by_code:
            return { ...state, dataState: clientStateEnume.LOADING }
        case clientActionsTypes.getclient_by_code_Succeess:
            return { ...state, dataState: clientStateEnume.LOADED, client: null, four: (<clientActions>action).payload }
        case clientActionsTypes.getclient_by_code_Error:
            return { ...state, dataState: clientStateEnume.ERROR, errorMessage: (<clientActions>action).payload }
        case clientActionsTypes.modifier_client:
            return { ...state, dataState: clientStateEnume.LOADING }
        case clientActionsTypes.modifier_client_Succeess:
            return { ...state, dataState: clientStateEnume.LOADED, client: (<clientActions>action).payload }
        case clientActionsTypes.Save_client_Error:
            return { ...state, dataState: clientStateEnume.ERROR, errorMessage: (<clientActions>action).payload }

        default: return { ...state, dataState: clientStateEnume.INITIAL }
    }
}
export function clientSaveReducer(state = initState, action: Action): clientState {
    switch (action.type) {
        case clientActionsTypes.Save_client:
            return { ...state, dataState: clientStateEnume.LOADING }
        case clientActionsTypes.Save_client_Succeess:
            return { ...state, dataState: clientStateEnume.LOADED, client: (<clientActions>action).payload }
        case clientActionsTypes.Save_client_Error:
            return { ...state, dataState: clientStateEnume.ERROR, errorMessage: (<clientActions>action).payload }
        default: return { ...state, dataState: clientStateEnume.INITIAL }

    }

}
export function clientimprimerReducer(state = initState, action: Action): clientState {
    switch (action.type) {
        case clientActionsTypes.imprimer_client:
            return { ...state, dataState: clientStateEnume.LOADING }
        case clientActionsTypes.imprimer_client_Succeess:
            return { ...state, dataState: clientStateEnume.LOADED, client: (<clientActions>action).payload }
        case clientActionsTypes.imprimer_client_Error:
            return { ...state, dataState: clientStateEnume.ERROR, errorMessage: (<clientActions>action).payload }
        case clientActionsTypes.inisiale_state:
            return { ...state, dataState: clientStateEnume.INITIAL }
        default: return { ...state, dataState: clientStateEnume.INITIAL }
    }
}
// export function fournisseurmodifierReducer(state = initStateModifier, action: Action): fournisseurStateModifier {
//     switch (action.type) {
//         case fournisseurActionsTypes.modifier_fournisseur:
//             return { ...state, dataState: fournisseurStateEnume.LOADING }
//         case fournisseurActionsTypes.modifier_fournisseur_Succeess:
//             return { ...state, dataState: fournisseurStateEnume.LOADED, fournisseur: (<fournisseurActions>action).payload }
//         case fournisseurActionsTypes.Save_fournisseur_Error:
//             return { ...state, dataState: fournisseurStateEnume.ERROR, errorMessage: (<fournisseurActions>action).payload }
//         default: return { ...state, dataState: fournisseurStateEnume.LOADED }
//     }
// }