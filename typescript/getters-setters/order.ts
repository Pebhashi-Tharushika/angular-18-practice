class Order {
    private _paymentInfo: string;

    constructor(paymentInfo: string) {
        this._paymentInfo = paymentInfo;
    }

    get paymentInfo(): string {
        return this._paymentInfo;
    }

    set paymentInfo(info: string) {
        if (info === "") {
            throw new Error('payment info can not be empty');
        }
        this._paymentInfo = info;
    }
}

const order = new Order("payment Info 1");
order.paymentInfo = "payment Info 2"; // Setting via setter
console.log(order.paymentInfo);  // Accessing via getter