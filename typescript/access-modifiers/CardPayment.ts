import { Payment } from './Payment';

export class CardPayment extends Payment {
    cardNumber: string

    constructor(payerName: string, amount: number, referenceId: string, isPending: boolean, cardNumber: string) {
        super(payerName, amount, referenceId, isPending);
        this.cardNumber = cardNumber;
    }

    maskCardNumber(): string {
        console.log('maskCardNumber()');
        return 'XXXX';
    }

    printCommonPaymentDetails() {
        console.log(this.payerName);    // Accessible (public)
        // console.log(this.amount);    // Not Accessible (private)
        console.log(this.referenceId);  // Accessible (protected)
        console.log(this.isPending)     // Accessible (public)


        this.markAsCompleted();                   // Accessible (public)
        // this.refund();                         // Not Accessible (private)
        let isValid = this.validateReference();   // Accessible (protected)
        let summary = this.getSummary();          // Accessible (public)

    }

}