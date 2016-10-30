var Barnabas = {
    printFirstName: function () {
        console.log("Ghana Jollof");
        console.log(this === Barnabas);
    }
};

Barnabas.printFirstName();

beDifferent();

// The default calling context is global
function beDifferent() {
    console.log("\nDo different things!");
    console.log(this === global);

}