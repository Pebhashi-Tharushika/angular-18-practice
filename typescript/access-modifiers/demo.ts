import { CardPayment } from "./CardPayment";

let pay1 = new CardPayment('John', 50000, 'REF2934', false, '123-356-4567-0987');


console.log(pay1.payerName);        // Accessible (public)
// console.log(pay1.amount);       // Not Accessible (private)
// console.log(pay1.referenceId);  // Not Accessible (protected)
console.log(pay1.isPending)        // Accessible (public)


pay1.markAsCompleted();                      // Accessible (public)
// pay1.refund();                            // Not Accessible (private)
// let isValid  = pay1.validateReference();  // Not Accessible (protected)
let summary = pay1.getSummary();             // Accessible (public)


pay1.printDetails();

pay1.printCommonPaymentDetails();

