var BankAccount = /** @class */ (function () {
    function BankAccount(ownerName, accountNumber, balance, isSaving) {
        this.ownerName = ownerName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    BankAccount.prototype.displayData = function () {
        console.log("owner name: ".concat(this.ownerName, ", account number: ").concat(this.accountNumber, ", balance: ").concat(this.balance));
    };
    BankAccount.prototype.depositMoney = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdrawMoney = function (amount) {
        this.balance -= amount;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    return BankAccount;
}());
var acc1 = new BankAccount('Kamal', '34-070-810', 30400, true);
acc1.displayData(); // owner name: Kamal, account number: 34-070-810, balance: 30400
acc1.depositMoney(20000);
acc1.withdrawMoney(5000);
var balance = acc1.getBalance();
console.log(balance);
console.log(acc1.getAccountNumber());
