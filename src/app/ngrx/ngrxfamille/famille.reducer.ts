import { Action } from "@ngrx/store"
import { GetAllfamilletActions, familleActions, familleActionsTypes } from "./famille.action"
export enum familleStateEnume {
    LOADING = "loading",
    LOADED = "loaded",
    ffff = "ffff",
    ERROR = "error",
    INITIAL = "initial"
}
export interface familleState {
    famille: any,
    four: any,
    count: any,
    errorMessage: string,
    dataState: familleStateEnume
}
export interface familleStateModifier {
    famille: any,
    four: any,
    count: any,
    errorMessage: string,
    dataState: familleStateEnume
}
const initState: familleState = {
    famille: null,
    four: null,
    count: null,
    errorMessage: "",
    dataState: familleStateEnume.INITIAL
}
const initStateModifier:familleStateModifier = {
    famille: null,
    four: null,
    count: null,
    errorMessage: "",
    dataState: familleStateEnume.INITIAL
}
export function familleReducer(state = initState, action: Action): familleState {

    switch (action.type) {
        case familleActionsTypes.Get_All_famille:
            return { ...state, dataState: familleStateEnume.LOADING }
        case familleActionsTypes.Get_All_famille_Succeess:
            return { ...state, dataState:familleStateEnume.LOADED, famille: (<GetAllfamilletActions>action).payload, four: null }
        case familleActionsTypes.Get_All_famille_Error:
            return { ...state, dataState: familleStateEnume.ERROR, errorMessage: (<GetAllfamilletActions>action).payload }
        case familleActionsTypes.delete_famille:
            return { ...state, dataState: familleStateEnume.LOADING }
        case familleActionsTypes.delete_famille_Succeess:
            return { ...state, dataState: familleStateEnume.LOADED, famille: (<familleActions>action).payload }
        case familleActionsTypes.delete_famille_Error:
            return { ...state, dataState: familleStateEnume.ERROR, errorMessage: (<familleActions>action).payload }
        case familleActionsTypes.getfamille_by_code:
            return { ...state, dataState: familleStateEnume.LOADING }
        case familleActionsTypes.getfamille_by_code_Succeess:
            return { ...state, dataState:familleStateEnume.LOADED, famille: null, four: (<familleActions>action).payload }
        case familleActionsTypes.getfamille_by_code_Error:
            return { ...state, dataState: familleStateEnume.ERROR, errorMessage: (<familleActions>action).payload }
        case familleActionsTypes.modifier_famille:
            return { ...state, dataState: familleStateEnume.LOADING }
        case familleActionsTypes.modifier_famille_Succeess:
            return { ...state, dataState: familleStateEnume.LOADED, famille: (<familleActions>action).payload }
        case familleActionsTypes.Save_famille_Error:
            return { ...state, dataState: familleStateEnume.ERROR, errorMessage: (<familleActions>action).payload }

        default: return { ...state, dataState: familleStateEnume.INITIAL }
    }
}
export function familleSaveReducer(state = initState, action: Action): familleState {
    switch (action.type) {
        case familleActionsTypes.Save_famille:
            return { ...state, dataState: familleStateEnume.LOADING }
        case familleActionsTypes.Save_famille_Succeess:
            return { ...state, dataState: familleStateEnume.LOADED, famille: (<familleActions>action).payload }
        case familleActionsTypes.Save_famille_Error:
            return { ...state, dataState: familleStateEnume.ERROR, errorMessage: (<familleActions>action).payload }
        default: return { ...state, dataState: familleStateEnume.INITIAL }

    }

}
export function familleimprimerReducer(state = initState, action: Action): familleState {
    switch (action.type) {
        case familleActionsTypes.imprimer_famille:
            return { ...state, dataState: familleStateEnume.LOADING }
        case familleActionsTypes.imprimer_famille_Succeess:
            return { ...state, dataState: familleStateEnume.LOADED, famille: (<familleActions>action).payload }
        case familleActionsTypes.imprimer_famille_Error:
            return { ...state, dataState: familleStateEnume.ERROR, errorMessage: (<familleActions>action).payload }
        case familleActionsTypes.inisiale_state:
            return { ...state, dataState: familleStateEnume.INITIAL }
        default: return { ...state, dataState: familleStateEnume.INITIAL }
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