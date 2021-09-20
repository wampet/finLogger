//We are exporting the class invoice but it also implements the hasFormatter interface as well
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient}  is owed Ugx.${this.amount} for ${this.details} `;
    }
}
