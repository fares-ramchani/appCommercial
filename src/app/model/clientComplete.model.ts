import { client } from "./client.model";

export interface clientComplete {
    code: number,
    companyName : string,
    abbreviation: string,
    maxCredit: number,
    maxTerms: number,
    inProgress: boolean,
    client:client
    }