var Product = /** @class */ (function () {
    function Product(profit) {
        this.profit = profit;
    }
    Product.prototype.getProfit = function () {
        return this.profit;
    };
    Product.prototype.setProfit = function (value) {
        if (value < 0) {
            throw new Error('Price cannot be negative');
        }
        this.profit = value;
    };
    return Product;
}());
var product = new Product(100);
product.setProfit(150); // Setting via setter
console.log(product.getProfit()); // Accessing via getter
