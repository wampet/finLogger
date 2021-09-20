//CLASSES
//This is an instance of an object..We can also call it a blueprint for an object
//the method only works if we have the access modifiers infront of the property
//We are exporting the class invoice but it also implements the hasFormatter interface as well
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes Ugx.${this.amount} for ${this.details} `;
    }
}
