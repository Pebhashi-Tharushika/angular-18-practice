/*------------------------------------- with class properties ----------------------------------*/
var Supplier = /** @class */ (function () {
    function Supplier(name, age) {
        this.name = name;
        this.age = age;
    }
    return Supplier;
}());
var supplier = new Supplier('Alice', 25);
console.log(supplier.name); // Alice
// supplier.name = 'Bob';  // Error - Cannot assign to 'name' because it is a read-only property.
/*------------------------------------- with arrays ----------------------------------*/
var arr = [1, 2, 3];
console.log(arr[0]); // 1
// arr[0] = 10;  // Error - Index signature in type 'readonly number[]' only permits reading.
/*------------------------------------- with tuples ----------------------------------*/
var point = [1, 2];
console.log(point[0]); // 1
var msg = { id: 1, recipientId: 'REC0056', messageBody: 'The monthly meeting is held tomorrow' };
console.log(msg.id); // 1
//   msg.id = 2;  // Error - Cannot assign to 'id' because it is a read-only property
