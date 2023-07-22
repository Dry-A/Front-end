/* functions*/
let friends = ["Minie", "Pateta", "Legolas", "Eleven", "Duidow"];

console.log(friends);
friends[1] = "Doug Funny";
console.log(friends);
console.log(friends[2]);

function friendsStatus(status, total) {
  console.log("Transaction " + status + "! Total U$: " + total);
}

friendsStatus("Approved ", 3000);

function giveDiscount(value) {
  return value - (value / 10);
}

let valueWithDiscount = giveDiscount(1000);

console.log(valueWithDiscount);

/*Arithmetic Operators*/

let num1 = 20
let num2 = 2
console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)
console.log(num1++)/*show first, then add*/
console.log(num1)
console.log(++num1)
console.log(num1)
console.log(num1--)/*show first, then subtract*/
console.log(num1)

/*ternary operator and logical operator*/

let driverSpeed = 190

let speedLevel = driverSpeed > 110 ? 'Above ' : 'Below'
console.log(speedLevel)





