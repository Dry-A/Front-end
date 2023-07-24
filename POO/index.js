let petFriend = {
  petColor: "black",
  petName: "Danka",
  petAge: 5,
  petRace: "Lulu Pomerania",
  petAvailable: true,
};

console.log(petFriend);

petFriend.petColor = " Brown";

/*objeto pode ser com o const ou com o let*/
console.log(' ')
  console.log('Criando objetos aluno "na mão" um por um ')
  
  const aluno1 = {
    nome: 'Ricardo Antunes',
    idade: 52,
    endereco1: 'Rua Blalbalaba',
    endereco2: 45,
    matricula: 52562323,
    telefone: {
      principal: 452563656,
      celular: 45225232
    },
    imprimeAluno: function(){
      console.log('Imprimindo aluno');
    },
  }
  console.log(aluno1)
  
  
  
  const aluno2 = {
    nome: 'Atila Bran',
    idade: 55,
    endereco1: 'Rua Bartolomeu',
    endereco2: 105,
    matricula: 1162323,
    telefone: {
      principal: 923699956,
      celular: 91156589
    },
    imprimeAluno: function() {
      console.log('imprimindo mais um aluno');
    },
  }
  console.log(aluno2)
  console.log(aluno2.endereco1)
  console.log(aluno2.nome)
  
  
  console.log(' ')
  console.log('Criando objetos livro "na mão" um por um ')

const book1 = {
  /*seriam as variaveies let*/
  livroTitulo: "Pense e Enriqueça",
  livroAutor: "Josh Eshua",
  livroPaginas: 85,
  livroCapitulo: {
    capitulo1: "Fundamentos",
    capitulo2: "Conhecendo a si mesmo",
    capitulo3: "Resignificando as coisas",
  },
  imprimeLivro: function () {
    console.log("imprimindo o livro que vc fez um por um");
  },
};

const book2 = {
  /*seriam as variaveies let*/
  livroTitulo: "Como fazer amigos e influenciar pessoas",
  livroAutor: "Josh Eshua",
  livroCapitulo: {
    capitulo1: "Fundamentos",
    capitulo2: "Conhecendo a si mesmo",
    capitulo3: "Resignificando as coisas",
  },
  imprimeLivro: function () {
    console.log("imprimindo o livro que vc fez um por um");
  },
};

console.log(book1);
console.log(book2);

console.log(book1.livroAutor);
console.log(book2.imprimeLivro());
console.log(' ')
console.log("-------------");

/*criando factory - que é uma fabrica de objetos*/

function creadorDeLivro(titulo, autor, paginas) {

    const livro = {
      /*seriam as variaveies let*/
      Titulo: titulo,
      Autor: autor,
      Paginas: paginas,
      imprimeLivro: function () {
     
      }
    }
    return livro
  }
  console.log(' ')
  const livro1 = creadorDeLivro('Atomic','Roberto Carlos', 45)
  console.log(livro1)
  const livro2 = creadorDeLivro('Think', 'Napoleon Hill', 485)
  console.log(livro2)
  const livro3 = creadorDeLivro('Biblia dos contos Magnificos','Pulley',213)
  console.log(livro3)
  const livro4 = creadorDeLivro('Boa noite Princesinha', 'Sheila walsh', 287)
  console.log(livro4)
  const livro5 = creadorDeLivro('O Poder da ação', 'Paulo Vieira', 98)
  console.log(livro5)

  livro3.color = 'White'

  console.log(livro3)
    
  console.log(' ')
  console.log('----------- Outra Factory de Receita ------------')
  
  function creadorDeReceita(n1, n2, n3, n4){
    
    const receita = {
      NomeReceita: n1,
      Descricao: n2,
      Ingredientes: {
        Ingrediente1: n3,
        Ingrediente2: n4,
      },
      imprimeReceita: function(){
        console.log('Imprimindo receita');
      }
    }
    return receita
  }
  
  const receita1 = creadorDeReceita('Risoto de Frango', 'Risoto de frango simples com queijo', 'queijo','presunto','molho de tomate')
  console.log(receita1)
  
  const receita2 = creadorDeReceita('Brigadeiro Gourmet','Brigadeiro cremoso com creme de leite','Creme de leite', 'Leite condensado')
  console.log(receita2)
  /*usando o Constructor */
  
  console.log(' ')
  console.log('----------- usando Constructor, inicia com letra maiúscula ------------')
  
  function CriadorDeLivro(titulo, autor, paginas) {
    
    /*seriam as variaveies let*/
    this.livroTitulo = titulo;
    this.livroAutor = autor;
    this.livroPaginas = paginas
  }
  
  const livro6 = new CriadorDeLivro('Atomic','Roberto Carlos', 45)
  const livro7 = new CriadorDeLivro('Think', 'Napoleon Hill', 219)
  
  console.log(livro6)
  console.log(livro7)

  function CriadoraDeSocio(nome, sobrenome,idade, sexo){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.sexo = sexo
  }

  const socio1 = new CriadoraDeSocio('Peti','Fendues',21,'m')
  const socio2 = new CriadoraDeSocio('Mafalda','Serventan',41,'F')
  const socio3 = new CriadoraDeSocio('Ronaldo','Silva',14,'M')

  console.log(socio1)
  console.log(socio2)
  console.log(socio3)
