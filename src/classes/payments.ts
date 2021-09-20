import {hasFormatter} from "../interfaces/hasFormatter.js"
//We are exporting the class invoice but it also implements the hasFormatter interface as well
export class Payment implements hasFormatter{

    constructor( 
         readonly recipient:string,
         private details: string,
         public amount: number
         ) { }
    format(){
     
        return `${this.recipient}  is owed Ugx.${this.amount} for ${this.details} `
    }
 }