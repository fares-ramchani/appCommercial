import { fournisseur } from "./fournisseur.model";

export interface fournisseurComplete {
code: number,
companyName : string,
abbreviation: string,
maxCredit: number,
maxTerms: number,
inProgress: boolean,
fournisseur:fournisseur
}