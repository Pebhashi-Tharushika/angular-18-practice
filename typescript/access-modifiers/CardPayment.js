"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardPayment = void 0;
var Payment_1 = require("./Payment");
var CardPayment = /** @class */ (function (_super) {
    __extends(CardPayment, _super);
    function CardPayment(payerName, amount, referenceId, isPending, cardNumber) {
        var _this = _super.call(this, payerName, amount, referenceId, isPending) || this;
        _this.cardNumber = cardNumber;
        return _this;
    }
    CardPayment.prototype.maskCardNumber = function () {
        console.log('maskCardNumber()');
        return 'XXXX';
    };
    CardPayment.prototype.printCommonPaymentDetails = function () {
        console.log(this.payerName); // Accessible (public)
        // console.log(this.amount);    // Not Accessible (private)
        console.log(this.referenceId); // Accessible (protected)
        console.log(this.isPending); // Accessible (public)
        this.markAsCompleted(); // Accessible (public)
        // this.refund();                         // Not Accessible (private)
        var isValid = this.validateReference(); // Accessible (protected)
        var summary = this.getSummary(); // Accessible (public)
    };
    return CardPayment;
}(Payment_1.Payment));
exports.CardPayment = CardPayment;
