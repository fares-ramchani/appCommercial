import { Action } from "@ngrx/store"
import { GetAllmagasintActions, magasinActions, magasinActionsTypes } from "./magasin.action"
export enum magasinStateEnume {
    LOADING = "loading",
    LOADED = "loaded",
    ffff = "ffff",
    ERROR = "error",
    INITIAL = "initial"
}
export interface magasinState {
    magasin: any,
    four: any,
    count: any,
    errorMessage: string,
    dataState: magasinStateEnume
}
export interface magasinStateModifier {
    magasin: any,
    four: any,
    count: any,
    errorMessage: string,
    dataState: magasinStateEnume
}
const initState: magasinState = {
    magasin: null,
    four: null,
    count: null,
    errorMessage: "",
    dataState: magasinStateEnume.INITIAL
}
const initStateModifier: magasinStateModifier = {
    magasin: null,
    four: null,
    count: null,
    errorMessage: "",
    dataState: magasinStateEnume.INITIAL
}
export function magasinReducer(state = initState, action: Action): magasinState {

    switch (action.type) {
        case magasinActionsTypes.Get_All_magasin:
            return { ...state, dataState: magasinStateEnume.LOADING }
        case magasinActionsTypes.Get_All_magasin_Succeess:
            return { ...state, dataState: magasinStateEnume.LOADED, magasin: (<GetAllmagasintActions>action).payload, four: null }
        case magasinActionsTypes.Get_All_magasin_Error:
            return { ...state, dataState: magasinStateEnume.ERROR, errorMessage: (<GetAllmagasintActions>action).payload }
        case magasinActionsTypes.delete_magasin:
            return { ...state, dataState: magasinStateEnume.LOADING }
        case magasinActionsTypes.delete_magasin_Succeess:
            return { ...state, dataState: magasinStateEnume.LOADED, magasin: (<magasinActions>action).payload }
        case magasinActionsTypes.delete_magasin_Error:
            return { ...state, dataState: magasinStateEnume.ERROR, errorMessage: (<magasinActions>action).payload }
        case magasinActionsTypes.getmagasin_by_code:
            return { ...state, dataState: magasinStateEnume.LOADING }
        case magasinActionsTypes.getmagasin_by_code_Succeess:
            return { ...state, dataState: magasinStateEnume.LOADED, magasin: null, four: (<magasinActions>action).payload }
        case magasinActionsTypes.getmagasin_by_code_Error:
            return { ...state, dataState: magasinStateEnume.ERROR, errorMessage: (<magasinActions>action).payload }
        case magasinActionsTypes.modifier_magasin:
            return { ...state, dataState: magasinStateEnume.LOADING }
        case magasinActionsTypes.modifier_magasin_Succeess:
            return { ...state, dataState: magasinStateEnume.LOADED, magasin: (<magasinActions>action).payload }
        case magasinActionsTypes.Save_magasin_Error:
            return { ...state, dataState: magasinStateEnume.ERROR, errorMessage: (<magasinActions>action).payload }

        default: return { ...state, dataState: magasinStateEnume.INITIAL }
    }
}
export function magasinSaveReducer(state = initState, action: Action): magasinState {
    switch (action.type) {
        case magasinActionsTypes.Save_magasin:
            return { ...state, dataState: magasinStateEnume.LOADING }
        case magasinActionsTypes.Save_magasin_Succeess:
            return { ...state, dataState: magasinStateEnume.LOADED, magasin: (<magasinActions>action).payload }
        case magasinActionsTypes.Save_magasin_Error:
            return { ...state, dataState: magasinStateEnume.ERROR, errorMessage: (<magasinActions>action).payload }
        default: return { ...state, dataState: magasinStateEnume.INITIAL }

    }

}
export function magasinimprimerReducer(state = initState, action: Action): magasinState {
    switch (action.type) {
        case magasinActionsTypes.imprimer_magasin:
            return { ...state, dataState: magasinStateEnume.LOADING }
        case magasinActionsTypes.imprimer_magasin_Succeess:
            return { ...state, dataState: magasinStateEnume.LOADED, magasin: (<magasinActions>action).payload }
        case magasinActionsTypes.imprimer_magasin_Error:
            return { ...state, dataState: magasinStateEnume.ERROR, errorMessage: (<magasinActions>action).payload }
        case magasinActionsTypes.inisiale_state:
            return { ...state, dataState: magasinStateEnume.INITIAL }
        default: return { ...state, dataState: magasinStateEnume.INITIAL }
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