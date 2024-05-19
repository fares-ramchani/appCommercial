import { GetAllfournisseurActions, fournisseurActions, fournisseurActionsTypes } from "./fournisseur.actions"
import { Action } from "@ngrx/store"
export enum fournisseurStateEnume {
    LOADING = "loading",
    LOADED = "loaded",
    ffff = "ffff",
    ERROR = "error",
    INITIAL = "initial"
}
export interface fournisseurState {
    fournisseur: any,
    four: any,
    count: any,
    errorMessage: string,
    dataState: fournisseurStateEnume
}
export interface fournisseurStateModifier {
    fournisseur: any,
    four: any,
    count: any,
    errorMessage: string,
    dataState: fournisseurStateEnume
}
const initState: fournisseurState = {
    fournisseur: null,
    four: null,
    count: null,
    errorMessage: "",
    dataState: fournisseurStateEnume.INITIAL
}
const initStateModifier: fournisseurStateModifier = {
    fournisseur: null,
    four: null,
    count: null,
    errorMessage: "",
    dataState: fournisseurStateEnume.INITIAL
}
export function fournisseurReducer(state = initState, action: Action): fournisseurState {

    switch (action.type) {
        case fournisseurActionsTypes.Get_All_fournisseur:
            return { ...state, dataState: fournisseurStateEnume.LOADING }
        case fournisseurActionsTypes.Get_All_fournisseur_Succeess:
            return { ...state, dataState: fournisseurStateEnume.LOADED, fournisseur: (<GetAllfournisseurActions>action).payload, four: null }
        case fournisseurActionsTypes.Get_All_fournisseur_Error:
            return { ...state, dataState: fournisseurStateEnume.ERROR, errorMessage: (<GetAllfournisseurActions>action).payload }
        case fournisseurActionsTypes.delete_fournisseur:
            return { ...state, dataState: fournisseurStateEnume.LOADING }
        case fournisseurActionsTypes.delete_fournisseur_Succeess:
            return { ...state, dataState: fournisseurStateEnume.LOADED, fournisseur: (<fournisseurActions>action).payload }
        case fournisseurActionsTypes.delete_fournisseur_Error:
            return { ...state, dataState: fournisseurStateEnume.ERROR, errorMessage: (<fournisseurActions>action).payload }
        case fournisseurActionsTypes.getfournisseur_by_code:
            return { ...state, dataState: fournisseurStateEnume.LOADING }
        case fournisseurActionsTypes.getfournisseur_by_code_Succeess:
            return { ...state, dataState: fournisseurStateEnume.LOADED, fournisseur: null, four: (<fournisseurActions>action).payload }
        case fournisseurActionsTypes.getfournisseur_by_code_Error:
            return { ...state, dataState: fournisseurStateEnume.ERROR, errorMessage: (<fournisseurActions>action).payload }
        case fournisseurActionsTypes.modifier_fournisseur:
            return { ...state, dataState: fournisseurStateEnume.LOADING }
        case fournisseurActionsTypes.modifier_fournisseur_Succeess:
            return { ...state, dataState: fournisseurStateEnume.LOADED, fournisseur: (<fournisseurActions>action).payload }
        case fournisseurActionsTypes.Save_fournisseur_Error:
            return { ...state, dataState: fournisseurStateEnume.ERROR, errorMessage: (<fournisseurActions>action).payload }

        default: return { ...state, dataState: fournisseurStateEnume.INITIAL }
    }
}
export function fournisseurSaveReducer(state = initState, action: Action): fournisseurState {
    switch (action.type) {
        case fournisseurActionsTypes.Save_fournisseur:
            return { ...state, dataState: fournisseurStateEnume.LOADING }
        case fournisseurActionsTypes.Save_fournisseur_Succeess:
            return { ...state, dataState: fournisseurStateEnume.LOADED, fournisseur: (<fournisseurActions>action).payload }
        case fournisseurActionsTypes.Save_fournisseur_Error:
            return { ...state, dataState: fournisseurStateEnume.ERROR, errorMessage: (<fournisseurActions>action).payload }
        default: return { ...state, dataState: fournisseurStateEnume.INITIAL }
    }
}
export function fournisseurimprimerReducer(state = initState, action: Action): fournisseurState {
    switch (action.type) {
        case fournisseurActionsTypes.imprimer_fournisseur:
            return { ...state, dataState: fournisseurStateEnume.LOADING }
        case fournisseurActionsTypes.imprimer_fournisseur_Succeess:
            return { ...state, dataState: fournisseurStateEnume.LOADED, fournisseur: (<fournisseurActions>action).payload }
        case fournisseurActionsTypes.imprimer_fournisseur_Error:
            return { ...state, dataState: fournisseurStateEnume.ERROR, errorMessage: (<fournisseurActions>action).payload }
        case fournisseurActionsTypes.inisiale_state:
            return { ...state, dataState: fournisseurStateEnume.INITIAL}
        default: return { ...state, dataState: fournisseurStateEnume.INITIAL }
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