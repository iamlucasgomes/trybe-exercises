// (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
function RomanNumerals(string) {
  let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  string = string.toUpperCase();
  const tamanho = string.length;
  let soma = romanos[string[tamanho - 1]];
  let atual = romanos[string[tamanho - 1]];
 
  if(soma === undefined){
    return "Esse valor não é um algorismo romano";
 }
  
  for( let index = 2; index <= tamanho; index += 1){
    const proximo = romanos[string[tamanho - index]];
     if (atual <= proximo) {
      soma += proximo;
    } else {
      soma -= proximo;
  } atual = proximo;
  }
  return soma;
}

// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.


function arrayOfNumbers(vector){
  let  pares = [];
  let novoArray = [];
  for(let index = 0; index < vector.length; index += 1){
    for(let index2 = 0; index2 < vector[index].length; index2 +=1){
      if(vector[index][index2] % 2 === 0){
        novoArray.push(vector[index][index2]);
      }
    }
  } return novoArray;
  }


  // 3 - A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

function fruitsInTheBasket(){
  let quantidade = {}
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
  
basket.forEach((contador) => {
  quantidade[contador] = (quantidade[contador] || 0) + 1 
});

console.log(`Sua cesta possui ${Object.values(quantidade)[0]} ${Object.keys(quantidade)[0]}s, ${Object.values(quantidade)[1]} ${Object.keys(quantidade)[1]}s, ${Object.values(quantidade)[2]} ${Object.keys(quantidade)[2]}s, ${Object.values(quantidade)[3]} ${Object.keys(quantidade)[3]}s, ${Object.values(quantidade)[4]} ${Object.keys(quantidade)[4]}s, ${Object.values(quantidade)[5]} ${Object.keys(quantidade)[5]}s, ${Object.values(quantidade)[6]} ${Object.keys(quantidade)[6]}s.  `)

}

// Usando o objeto abaixo, faça os exercícios a seguir:

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

//4 - Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

console.log(`O Morador do bloco dois de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome} mora no ${moradores.blocoDois[1].andar}º andar, apartamento ${moradores.blocoDois[1].apartamento}.`)

// 5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome, depois faça o mesmo para os moradores do bloco 2.

for(let index = 0; index < moradores['blocoUm'].length; index += 1){
  console.log(`${moradores.blocoUm[index].nome} ${moradores.blocoUm[index].sobrenome}`)
}
for(let index = 0; index < moradores['blocoDois'].length; index += 1){
  console.log(`${moradores.blocoDois[index].nome} ${moradores.blocoDois[index].sobrenome}`)
}