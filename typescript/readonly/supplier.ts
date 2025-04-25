/*------------------------------------- with class properties ----------------------------------*/
class Supplier {
    readonly name: string;
    readonly age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const supplier = new Supplier('Alice', 25);
console.log(supplier.name); // Alice
// supplier.name = 'Bob';  // Error - Cannot assign to 'name' because it is a read-only property.




/*------------------------------------- with arrays ----------------------------------*/
const arr: readonly number[] = [1, 2, 3];
console.log(arr[0]);  // 1
// arr[0] = 10;  // Error - Index signature in type 'readonly number[]' only permits reading.



/*------------------------------------- with tuples ----------------------------------*/
const point: readonly [number, number] = [1, 2];
console.log(point[0]); // 1
// point[0] = 10; // Error - Cannot assign to '0' because it is a read-only property


// const height:readonly number = 23.5; // Error - 'readonly' type modifier is only permitted on array and tuple literal types.



/*-------------------------------- with interface properties ----------------------------*/
interface Message {
    readonly id: number;
    recipientId: string;
    messageBody: string;
}

let msg: Message = { id: 1, recipientId: 'REC0056', messageBody: 'The monthly meeting is held tomorrow' };
console.log(msg.id);  // 1
//   msg.id = 2;  // Error - Cannot assign to 'id' because it is a read-only property