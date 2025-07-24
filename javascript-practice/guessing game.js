var digit = prompt("enter a random number from 0-10: ")
digit = Number(digit)
var random = Math.floor(Math.random() * (10)) + 1;
while (digit !== random) {
    alert("try again")
    digit = prompt("enter a random number from 0-10: ")
    digit = Number(digit)
    random = Math.floor(Math.random() * (10)) + 1;
    console.log(random)
}
alert("correct");

while (true) {
    var digit = prompt("enter a number from 0-10: ");
    digit = Number(digit)
    var random = Math.floor(Math.random() * (10)) + 1;
    console.log(random)
    if (digit === random) {
        alert("correct");
        break;
    }
    alert("try again")
}