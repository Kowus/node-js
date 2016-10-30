// Prototypes allow you to add cool methods or properties to your objects or classes
function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        this.life -= 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }
};


var Kowus = new User();
var Cypha = new User();

Kowus.name = "Kowus";
Cypha.name = "Cypha";

Kowus.giveLife(Cypha);
console.log("Kowus:" + Kowus.life);
console.log("Cypha:" + Cypha.life);


// You can add functions to all objects
User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " gave  " + targetPlayer.name + " an U P P E R C U T!");
};

Cypha.uppercut(Kowus);

console.log("Kowus:" + Kowus.life);
console.log("Cypha:" + Cypha.life);

User.prototype.magic = 60;
console.log(Kowus.magic);
console.log(Cypha.magic);