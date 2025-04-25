class Player {
    // Properties
    name: string;
    score: number;

    // Constructor
    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }

    // Method
    play(): void {
        console.log(`Name: ${this.name} and score: ${this.score}`);
    }
}

// Creating an instance of the class
const player1 = new Player('Alice', 25);
player1.play();  // Name: Alice and score: 2