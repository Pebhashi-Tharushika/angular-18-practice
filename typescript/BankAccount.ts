class BankAccount {
    constructor(public ownerName: string, protected accountNumber: string, private balance: number) { }

    displayData() {
        console.log(`owner name: ${this.ownerName}, account number: ${this.accountNumber}, balance: ${this.balance}`);
    }

}

let emp1 = new BankAccount('Kamal', '34-070-810', 30400);
emp1.displayData();

/*-------------- OUTPUT ----------- */
// owner name: Kamal, account number: 34-070-810, balance: 30400
