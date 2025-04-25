export class Payment {
    public payerName: string;
    private amount: number;
    protected referenceId: string;
    isPending: boolean;

    constructor(payerName: string, amount: number, referenceId: string, isPending: boolean) {
        this.payerName = payerName;
        this.amount = amount;
        this.referenceId = referenceId;
        this.isPending = isPending;
    }

    public markAsCompleted(): void {
        console.log('markAsCompleted()');
    }

    private refund(): void {
        console.log('refund()');
    }

    protected validateReference(): boolean {
        console.log('validateReference()');
        return true;
    }

    getSummary(): string {
        console.log('getSummary()');
        return `${this.payerName}, ${this.amount}, ${this.referenceId}, ${this.isPending}`
    }

    printDetails() {

        console.log(this.payerName);     // Accessible (public)
        console.log(this.amount);       // Accessible (private)
        console.log(this.referenceId);  // Accessible (protected)
        console.log(this.isPending)     // Accessible (public)


        this.markAsCompleted();                   // Accessible (public)
        this.refund();                            // Accessible (private)
        let isValid = this.validateReference();  // Accessible (protected)
        let summary = this.getSummary();          // Accessible (public)

    }

}




