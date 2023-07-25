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
  return value - value / 10;
}

let valueWithDiscount = giveDiscount(1000);

console.log("Valor com desconto R$ ", valueWithDiscount);

/*String*/

let mensagem = "Oi, Hello world para ir tirando a zica";

console.log(mensagem.length);
console.log(mensagem.startsWith("Oi, H"));
console.log(mensagem.includes("world"));
console.log(mensagem.concat(", concordo demais"));
console.log(mensagem.endsWith("zican"));
console.log(mensagem.toUpperCase());
console.log(mensagem.toLocaleUpperCase());
console.log(mensagem);

/*Template*/
let apelido = "Pedro";
let cidade = "Belo horizonte";
let frutas = {
  fruta1: "maçã",
  fruta2: "banana",
  fruta3: "pera",
};
const email = "Oi " + apelido + "\no encontro está cofirmado! \nAndré";
const email2 = `Oi  ${apelido},
O encontro está cofirmado! 
Será na cidade ${cidade} e você deve trazer as frutas ${frutas.fruta1} ${frutas.fruta2} e ${frutas.fruta3}
André`;

console.log(email);
console.log(email2);

/*Arrays e arrrow-function */

const personagensPreferidos = ["Gandalf", "He-man", "Lion", "SamWise"];
console.log(personagensPreferidos);

console.log(personagensPreferidos[1]);
console.log(personagensPreferidos.indexOf("Super Man"));

personagensPreferidos[2] = "Jiraya";
console.log(personagensPreferidos);

personagensPreferidos.push("Super Man", "Juba e Lula", "Wanda");
console.log(personagensPreferidos);

personagensPreferidos.unshift("She-ha", "Mickey", "Penelope Charmosa");
console.log(personagensPreferidos);

personagensPreferidos.splice(2, 0, "Aragorn", "Arlequina");
console.log(personagensPreferidos);

console.log(personagensPreferidos.includes("Super Man"));

const final = personagensPreferidos;
console.log(personagensPreferidos.pop());

const filmes = [
  { id: 1, nomeFilme: "Matrix" },
  { id: 2, nomeFilme: "O Senhor dos anéis" },
  { id: 3, nomeFilme: "Perfume de Mulher" },
];

console.log(
  filmes.find(function (filmes) {
    return filmes.nomeFilme == "Perfume de Mulher";
  })
);

/* usando uma arrow-function*/

console.log(filmes.find((filmes) => filmes.nomeFilme == "Matrix"));

const canecas = [
  {
    id: 10,
    modeloCaneca: "Lilo",
    materialCaneca: "vidro",
    preco: 23,
    cor: "Preta",
  },
  {
    id: 11,
    modeloCaneca: "Batmman",
    materialCaneca: "vidro",
    preco: 23,
    cor: "Preta",
  },
  {
    id: 12,
    modeloCaneca: "Cats",
    materialCaneca: "vidro",
    preco: 19,
    cor: "Rosa",
  },
  {
    id: 13,
    modeloCaneca: "Puca",
    materialCaneca: "plástico",
    preco: 14,
    cor: "Vermelha",
  },
  { id: 14, modeloCaneca: "Melhores Amigas" },
];

console.log(
  canecas.find(function (canecas) {
    return canecas.modeloCaneca == "Puca";
  })
);

console.log(canecas.find((canecas) => canecas.modeloCaneca === "Cats"));
console.log(canecas.find((canecas) => canecas.materialCaneca === "plástico"));
console.log(filmes.find((filmes) => filmes.nomeFilme == "O Senhor dos anéis"));
console.log(canecas.filter((canecas) => canecas.cor == "Preta"));
