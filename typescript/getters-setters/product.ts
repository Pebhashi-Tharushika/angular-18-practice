class Product {
    private profit: number;

    constructor(profit: number) {
        this.profit = profit;
    }

    getProfit(): number {
        return this.profit;
    }

    setProfit(value: number) {
        if (value < 0) {
            throw new Error('Price cannot be negative');
        }
        this.profit = value;
    }
}

const product = new Product(100);
product.setProfit(150);    // Setting via setter
console.log(product.getProfit());  // Accessing via getter