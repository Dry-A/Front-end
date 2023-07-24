console.log("Only appears in the inspector ");

let firstName = "Cecília";
let lastName = "Tedesco";
console.log(firstName + " " + lastName);

let fruit = "apple ";
let price = 9.0;
let type = "Gala";
console.log(
  "My favorite fruit is " + fruit + type + " and the price is  U$ " + price
);

const profession = "Developer";
console.log("Profession: " + profession);

let Tv = 'LG 42" Oled';
console.log("This tv is " + Tv);
Tv = 'Samsung 50" Led';
console.log("This tv is " + Tv);
Tv = null;
console.log("This tv is " + Tv);

console.log(typeof profession);
console.log(typeof price);
console.log(typeof Tv);

let firstname = "Sandra";
let lastname = "Albuquerque";
console.log(firstname + " " + lastname);
let sobrinha = "isabela";
let idade = 17;
let salario = 41580.0;

console.log(salario);
console.log(idade);
console.log(sobrinha);
console.log("O salário da minha sobrinha " + sobrinha + " é R$ " + salario);

salario = 7200.0;

/*
Array*/
console.log("O salário da minha sobrinha " + sobrinha + " é R$ " + salario);

const renda = 8000; // variavel que nao pode ser alterada
console.log("R$ " + renda);
let pet = "cachorro";
console.log("Meu pet é o " + pet);
pet = "gato";
console.log("Meu pet é o " + pet);
pet = "calopsita ";
console.log("Meu pet é o " + pet);

let petAvailable = true;
let petColor;

pet = null; // para zerar a variavel
console.log(petColor); // indefinido
console.log(pet);
console.log(typeof salario);
petColor = "white";

let petFriend = {
  petColor: "white",
  petName: "Amster",
  petAvailable: true,
  idade: 5,
};
console.log(petFriend);

petFriend.petColor = "black";
console.log(petFriend);

/*
functions*/
let friendsEscola = ["Minie", "Pateta", "Pato Donald", "Doug Funny"];
console.log(friendsEscola);
friendsEscola[2] = "Paty Maionese";
console.log(friendsEscola[0]);
console.log(friendsEscola);
console.log(friendsEscola[3]);

function friendsStatus(status, total) {
  //parametro
  console.log("Transaction " + status + "! Total U$ " + total);
}

friendsStatus("Approved", 3000); //argumento

function darDesconto(valor) {
  return valor - (valor * 10) / 100;
}

let valorComDesconto = darDesconto(5000);
console.log(valorComDesconto);

console.log(darDesconto(2000));
console.log(darDesconto(82000));
console.log(darDesconto(8900));
console.log(darDesconto(20));
console.log(darDesconto(650));

/*
operadores aritmetico*/
let num1 = 16;
let num2 = 4;
console.log(num1 + num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 - num2);

let total = num1 + num2;
console.log("Testando");
console.log(total);
console.log(--total);

console.log(num1 > 2);
console.log(num1 > 25);
console.log(num1 >= 25);
console.log(num1 < 25);
console.log(num1 <= 25);
console.log(num1 == 25);
console.log(num1 !== 25);

/*
operador ternário e operadores lógicos
true or false*/
let driver = 90;
let speed = driver > 110 ? "Acima - Above" : "Abaixo - Below";

console.log(speed);

let temIdadeMinima = false;
let temtituloEleitor = true;

let podeVotar = temIdadeMinima || temtituloEleitor;
console.log(podeVotar);

let empregado = false;
let rendaMinina = true;

let terContavip = empregado || (rendaMinina && podeVotar);
console.log(terContavip);

let corCliente = "white";
let corEstoque = "black";
let corVendida = corEstoque || corCliente; // ele escolhe primeiro da esquerda pra direita

console.log(corVendida);

/* if else*/

let driveSpeed = 110;

if (driveSpeed > 110) {
  console.log("Driving too fast");
} else if (driveSpeed > 40 && driveSpeed <= 110) {
  console.log("Velocidade ok");
} else {
  console.log("Driving too slow");
}

/*switch case*/

let mes = 4;

switch (mes) {
  case 6:
    console.log("Junho");
    break;
  case 5:
    console.log("maio");
    break;
  case 4:
    console.log("Abril");
    break;
  default:
    console.log("Mês inválido");
}

/*for loop*/

for (i = 0; i <= 10; i++) {
  console.log(i);
}

let numero = 0;
console.log("tabuada com for");
for (i = 0; i <= 10; i++) {
  let resultado = numero * i;
  console.log(numero + " x " + i + "=" + resultado);
}
console.log("while");
i = 1;
while (i <= 10) {
  console.log("Numero", i);
  i++;
}

console.log("do while");
i = 1994;
do {
  console.log("Copas do mundo em", i);
  i += 4;
} while (i <= 2023);

console.log("com for");
for (t = 1994; t <= 2023; t += 4) {
  console.log("Copa do mundo no ano", t);
}
console.log("com while:");
ano = 1994;
while (ano <= 2023) {
  console.log("ano ", ano, " teve copa");
  ano += 4;
}

console.log("------ for in --------");

const myCar = {
  modelo: "BMW",
  ano: 2023,
  cor: "preto",
  km: 23500,
};

for (let i in myCar) console.log(i, myCar[i]);

const meuMbti = {
  tipo: "Advogado",
  caracteristica: "Justiça",
  pontoFraco: "vaidade",
  populacao: "4%",
};

for (let dados in meuMbti) console.log(dados, meuMbti[dados]);

console.log("------ for of - mais usado em array --------");

const amigos = ["Gerle", "Marina", "Isadora"];
/*jeito errado*/
for (let amigo in amigos) console.log(amigos[amigo]);
/*jeito certo*/ console.log("------ jeito certo , resumido --------");
for (let amigo of amigos) console.log(amigo);

/*parar o loop */

let y = 1;

while (y <= 10) {
  if (y == 7) break;
  console.log("Numero ", y);
  y++;
}

/*ternary operator and logical operator*/

let driverSpeed = 190;

let speedLevel = driverSpeed > 110 ? "Above" : "Below";
console.log("Speed is", speedLevel, " of the allowed speed");
