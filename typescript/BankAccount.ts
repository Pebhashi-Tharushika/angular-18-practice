class BankAccount {
    constructor(public ownerName: string, protected accountNumber: string, private balance: number, isSaving: boolean) { }

    displayData() {
        console.log(`owner name: ${this.ownerName}, account number: ${this.accountNumber}, balance: ${this.balance}`);
    }

    depositMoney(amount: number): void {
        this.balance += amount;
    }

    withdrawMoney(amount: number): void {
        this.balance -= amount;
    }

    getBalance(): number {
        return this.balance;
    }

    getAccountNumber() {
        return this.accountNumber;
    }

}

let acc1 = new BankAccount('Kamal', '34-070-810', 30400, true);

acc1.displayData();  // owner name: Kamal, account number: 34-070-810, balance: 30400

acc1.depositMoney(20000);

acc1.withdrawMoney(5000);

let balance = acc1.getBalance();
console.log(balance); // 45400

console.log(acc1.getAccountNumber()); // 34-070-810