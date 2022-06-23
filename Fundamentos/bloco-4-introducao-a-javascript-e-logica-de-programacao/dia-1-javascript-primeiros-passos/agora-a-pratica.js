//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:


const a = 14;
const b = 91;

// Soma 
console.log(a + b)
// Subtração 
console.log(a - b)
// Multiplicação 
console.log(a * b)
// Divisão 
console.log(a / b)
// Módulo 
console.log(a % b)

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const c = 19;
const d = 91;

if (c > d) {
  console.log(c)
} else {
  console.log(d)
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const e = 14;
const f = 26;
const g = 19;

if (e > f && e > g) {
  console.log(e)
} else if (f > e && f > g) {
  console.log(f)
} else {
  console.log(g)
}

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const valor = 91;

if (valor > 0) {
  console.log("Esse número é positivo")
} else if (valor < 0) {
  console.log("Esse número é negativo")
} else {
  console.log("Esse número é neutro")
}

//🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const ladoA = 60;
const ladoB = 60;
const ladoC = -61;
const lados = (ladoA + ladoB + ladoC)


if (ladoA === 60 && ladoB === 60 && ladoC === 60) {
  console.log(true)
} else if (ladoA < 0 || ladoB < 0 || ladoC < 0) {
  console.log("Angulo inválido")
} else {
  console.log(false)
}

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let xadrez = "REI";

switch (xadrez.toLowerCase()) {
  case "peão":
    console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.")
    break;
  case "torre":
    console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.")
    break;
  case "cavalo":
    console.log("É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.")
    break;
  case "bispo":
    console.log("Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.")
    break;
  case "rainha":
    console.log("Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.")
    break;
  case "rei":
    console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.")
    break;
  default: "Insira uma peça de xadrez"
}

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let nota = 100;
if (nota < 0 || nota > 100) {
  console.log("Por favor informe uma nota entre 0 e 100")
}
else if (nota >= 90) {
  console.log('Sua nota é A');
} else if (nota >= 80) {
  console.log('Sua nota é B');
} else if (nota >= 70) {
  console.log('Sua nota é C');
} else if (nota >= 60) {
  console.log('Sua nota é D');
} else if (nota >= 50) {
  console.log('Sua nota é E');
} else {
  console.log('Sua nota é F');
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

const num1 = 10;
const num2 = 15;
const num3 = 13;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  console.log(true)
} else {
  console.log(false)
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

const numero1 = 10;
const numero2 = 15;
const numero3 = 13;

if (numero1 % 2 === 1 || numero2 % 2 === 1 || numero3 % 2 === 1) {
  console.log(true)
} else {
  console.log(false)
}

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const custo = 5000;
const valorVenda = 13500;
const imposto = (custo * 20 / 100)
const valorTotal = (custo + imposto)
const lucro = valorVenda - valorTotal
let vendas = 1000

if (custo < 0 || valorVenda < 0) {
  console.log("Insira um valor maior que 0")
} else {
  console.log(lucro * vendas)
} 

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 3000;
let aliquota;
let salarioBase;
let impostoRenda;
let parcela;
let desconto;
let resultado;

if (salarioBruto <= 1556.94) {
  aliquota = salarioBruto * 8 / 100;
} else if (salarioBruto <= 2594.92) {
  aliquota = salarioBruto * 9 / 100;
} else if (salarioBruto <= 5189.82) {
  aliquota = salarioBruto * 11 / 100;
} else {
  aliquota = 570.88;
}
salarioBase = salarioBruto - aliquota;

if (salarioBase <= 1903.98) {
  resultado = salarioBase;
} else if (salarioBase <= 2826.65) {
  impostoRenda = salarioBase * 7.5 / 100;
  parcela = 142.8;
  desconto = impostoRenda - parcela;
  resultado = salarioBase - desconto;
} else if (salarioBase <=3751.05) {
  impostoRenda = salarioBase * 15 / 100;
  parcela = 354.8;
  desconto = impostoRenda - parcela;
  resultado = salarioBase - desconto;
} else if (salarioBase <=4664.68) {
  impostoRenda = salarioBase * 22.5 / 100;
  parcela = 636.13;
  desconto = impostoRenda - parcela;
  resultado = salarioBase - desconto;
} else{
  impostoRenda = salarioBase * 27.5 / 100;
  parcela = 354.8;
  desconto = impostoRenda - parcela;
  resultado = salarioBase - desconto;
}
console.log(resultado)


