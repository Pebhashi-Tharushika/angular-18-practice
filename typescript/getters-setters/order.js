var Order = /** @class */ (function () {
    function Order(paymentInfo) {
        this._paymentInfo = paymentInfo;
    }
    Object.defineProperty(Order.prototype, "paymentInfo", {
        get: function () {
            return this._paymentInfo;
        },
        set: function (info) {
            if (info === "") {
                throw new Error('payment info can not be empty');
            }
            this._paymentInfo = info;
        },
        enumerable: false,
        configurable: true
    });
    return Order;
}());
var order = new Order("payment Info 1");
order.paymentInfo = "payment Info 2"; // Setting via setter
console.log(order.paymentInfo); // Accessing via getter
