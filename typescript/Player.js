var Player = /** @class */ (function () {
    // Constructor
    function Player(name, score) {
        this.name = name;
        this.score = score;
    }
    // Method
    Player.prototype.play = function () {
        console.log("Name: ".concat(this.name, " and score: ").concat(this.score));
    };
    return Player;
}());
// Creating an instance of the class
var player1 = new Player('Alice', 25);
player1.play(); // Name: Alice and score: 2
