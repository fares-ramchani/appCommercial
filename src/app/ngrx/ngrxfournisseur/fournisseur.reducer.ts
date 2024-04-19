import { GetAllfournisseurActions, fournisseurActions, fournisseurActionsTypes } from "./fournisseur.actions"
import { Action } from "@ngrx/store"
export enum fournisseurStateEnume {
    LOADING = "loading",
    LOADED = "loaded",
    ERROR = "error",
    INITIAL = "initial"
}
export interface fournisseurState {
    fournisseur: any[],
    errorMessage: string,
    dataState: fournisseurStateEnume
}
const initState: fournisseurState = {
    fournisseur: [],
    errorMessage: "",
    dataState: fournisseurStateEnume.INITIAL
}
export function fournisseurReducer(state = initState, action: Action): fournisseurState {

    switch (action.type) {
        case fournisseurActionsTypes.Get_All_fournisseur:
            return { ...state, dataState: fournisseurStateEnume.LOADING }
        case fournisseurActionsTypes.Get_All_fournisseur_Succeess:
            return { ...state, dataState: fournisseurStateEnume.LOADED, fournisseur: (<GetAllfournisseurActions>action).payload }
        case fournisseurActionsTypes.Get_All_fournisseur_Error:
            return { ...state, dataState: fournisseurStateEnume.ERROR, errorMessage: (<GetAllfournisseurActions>action).payload }
        case fournisseurActionsTypes.delete_fournisseur:
            return { ...state, dataState: fournisseurStateEnume.LOADING }
        case fournisseurActionsTypes.delete_fournisseur_Succeess:
            return { ...state, dataState: fournisseurStateEnume.LOADED, fournisseur: (<fournisseurActions>action).payload }
        case fournisseurActionsTypes.delete_fournisseur_Error:
            return { ...state, dataState: fournisseurStateEnume.ERROR, errorMessage: (<fournisseurActions>action).payload }
        default: return { ...state, dataState: fournisseurStateEnume.INITIAL }
    }
}