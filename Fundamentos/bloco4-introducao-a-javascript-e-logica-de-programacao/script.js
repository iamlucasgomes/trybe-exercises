//variáveis

const myName = "Lucas";
const birthCity = "Campo Maior - PI";
let birthYear = 1991;
birthYear = 2030;
birthCity = "Nova Iorque"

console.log( birthCity)

//Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId)
console.log(typeof isEnrolled)
console.log(typeof patientInfo)
console.log(typeof patientEmail)
console.log(typeof patientAge)

const base = 5;
const height = 8;

const area = base * height;
console.log(area)

const perimeter = 2*(base + height);
console.log(perimeter)


//Condições If e Else

const notaCandidato = 100;

if(notaCandidato >= 80){
  console.log("Parabéns, você foi aprovada(o)!")
} else if(notaCandidato < 80 && notaCandidato >= 60){
  console.log("Você está na nossa lista de espera")
} else {
  console.log("Você foi reprovada(o)")
}

//Operadores lógicos

const comida = 'pão na chapa';
const bebida = 'cafezinho';

if (bebida === 'cafezinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

let currentHour = 12;
let message = "";

if(currentHour >= 22){
  message = "Não deveríamos comer nada, é hora de dormir";
} else if(currentHour >= 18){
  message = "Rango da noite, vamos jantar :D";
} else if(currentHour >= 14){
  message = "Vamos fazer um bolo pro café da tarde?";
}	else if(currentHour >=	11){
  message = "Hora do almoço!!!";
} else	{
  message = "Hmmm, cheiro de café recém passado";
}

console.log(message)

let weekDay = "quarta-feira";

if(weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
  console.log("Oba, mais um dia de aprendizado na Trybe >:D")
} else if(weekDay === "sabado" || weekDay === "Domingo"){
  console.log("FINALMENTE, descanso merecido UwU")
} else {
  console.log("Esse dia não existe!")
}

//Switch e Case

let estado = "aprovado";

switch(estado){
    case "aprovado":
     console.log("Parabéns, você foi aprovada(o)!")
    break;
case "lista":
    console.log("Você está na nossa lista de espera")
    break;
case "reprovado":
    console.log("Você foi reprovada(o)")
    break;
  default: console.log("não se aplica")
}
