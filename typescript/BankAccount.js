var BankAccount = /** @class */ (function () {
    function BankAccount(ownerName, accountNumber, balance) {
        this.ownerName = ownerName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    BankAccount.prototype.displayData = function () {
        console.log("owner name: ".concat(this.ownerName, ", account number: ").concat(this.accountNumber, ", balance: ").concat(this.balance));
    };
    return BankAccount;
}());
var emp1 = new BankAccount('Kamal', '34-070-810', 30400);
emp1.displayData();
/*-------------- OUTPUT ----------- */
// owner name: Kamal, account number: 34-070-810, balance: 30400
