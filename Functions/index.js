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

console.log('Valor com desconto R$ ',valueWithDiscount);






