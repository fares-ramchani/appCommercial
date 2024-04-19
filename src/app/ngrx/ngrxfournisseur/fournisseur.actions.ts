import { Action } from "@ngrx/store";

export enum fournisseurActionsTypes{
    Get_All_fournisseur="[fournisseur] Get All fournisseur",
    Get_All_fournisseur_Succeess="[fournisseur] Get All fournisseur Success",
    Get_All_fournisseur_Error="[fournisseur] Get All fournisseur Error",
    //delete fournisseur
    delete_fournisseur="[fournisseur] delete fournisseur",
    delete_fournisseur_Succeess="[fournisseur] delete fournisseur Success",
    delete_fournisseur_Error="[fournisseur] delete fournisseur Error"

}
export class GetAllfournisseurActions implements Action{
    type: fournisseurActionsTypes=fournisseurActionsTypes.Get_All_fournisseur;
    constructor(public payload:any){

    } 
}
export class GetAllfournisseurActionsSuccess implements Action{
    type: fournisseurActionsTypes=fournisseurActionsTypes.Get_All_fournisseur_Succeess;
    constructor(public payload:any[]){

    }
}
export class GetAllfournisseurActionsError implements Action{
    type: fournisseurActionsTypes=fournisseurActionsTypes.Get_All_fournisseur_Error;
    constructor(public payload:string){

    }
}
//delete fournisseur
export class DeletefournisseursActions implements Action{
    type: fournisseurActionsTypes=fournisseurActionsTypes.delete_fournisseur;
    constructor(public payload:number){

    } 
}
export class DeletefournisseurActionsSuccess implements Action{
    type: fournisseurActionsTypes=fournisseurActionsTypes.delete_fournisseur_Succeess;
    constructor(public payload:any){

    }
}
export class DeletefournisseurActionsError implements Action{
    type: fournisseurActionsTypes=fournisseurActionsTypes.delete_fournisseur_Error;
    constructor(public payload:string){

    }
}
export type fournisseurActions=
GetAllfournisseurActions | GetAllfournisseurActionsSuccess |GetAllfournisseurActionsError|
DeletefournisseursActions| DeletefournisseurActionsSuccess |DeletefournisseurActionsError;