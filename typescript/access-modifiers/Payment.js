"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
var Payment = /** @class */ (function () {
    function Payment(payerName, amount, referenceId, isPending) {
        this.payerName = payerName;
        this.amount = amount;
        this.referenceId = referenceId;
        this.isPending = isPending;
    }
    Payment.prototype.markAsCompleted = function () {
        console.log('markAsCompleted()');
    };
    Payment.prototype.refund = function () {
        console.log('refund()');
    };
    Payment.prototype.validateReference = function () {
        console.log('validateReference()');
        return true;
    };
    Payment.prototype.getSummary = function () {
        console.log('getSummary()');
        return "".concat(this.payerName, ", ").concat(this.amount, ", ").concat(this.referenceId, ", ").concat(this.isPending);
    };
    Payment.prototype.printDetails = function () {
        console.log(this.payerName); // Accessible (public)
        console.log(this.amount); // Accessible (private)
        console.log(this.referenceId); // Accessible (protected)
        console.log(this.isPending); // Accessible (public)
        this.markAsCompleted(); // Accessible (public)
        this.refund(); // Accessible (private)
        var isValid = this.validateReference(); // Accessible (protected)
        var summary = this.getSummary(); // Accessible (public)
    };
    return Payment;
}());
exports.Payment = Payment;
