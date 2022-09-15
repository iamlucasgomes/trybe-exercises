function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.


window.onload = decemberDays();
window.onload = btnHolidays('Feriados');
window.onload = btnFriday('Sexta-Feira');


function decemberDays() {

  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const days = decemberDaysList[index];
    const listItems = document.createElement('li')
    const ulDays = document.querySelector('#days');

    ulDays.appendChild(listItems);
    listItems.innerText = days
    listItems.classList.add('day')


    if (days === 24 || days === 25 || days === 31) {
      listItems.classList.add('holiday');
    }
    if (days === 4 || days === 11 || days === 18 || days === 25) {
      listItems.classList.add('friday');
    }
  }


}

function btnHolidays(string) {
  const btnContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.setAttribute('id', 'btn-holiday');
  button.innerText = string;
  btnContainer.appendChild(button);
}

const holidayBtn = document.querySelector('#btn-holiday');
holidayBtn.addEventListener('click', holidayBgBlack);


function holidayBgBlack() {
  let backgroundColor = 'rgb(238,238,238)';
  let newColor = 'rgb(0, 0, 0)';
  const holiday = document.querySelectorAll('.holiday');
  for (const days of holiday) {
    if (days.style.backgroundColor === newColor) {
      days.style.backgroundColor = backgroundColor;
    } else {
      days.style.backgroundColor = newColor;
    }

  }
}

function btnFriday(string) {
  const btnContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.setAttribute('id', 'btn-friday');
  button.innerText = string;
  btnContainer.appendChild(button);
}

const fridayBtn = document.querySelector('#btn-friday');
fridayBtn.addEventListener('click', textFriday);

function textFriday() {

  const fridays = document.querySelectorAll('.friday');
  const days = [4, 11, 18, 25]
  const sextou = 'sextouBB'
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerText !== sextou) {
      fridays[index].innerText = sextou;
    } else {
      fridays[index].innerText = days[index];
    }
  }
}
const days = document.querySelectorAll('.day');
for (const day of days) {
  day.addEventListener('mouseenter', zoomIn);
  day.addEventListener('mouseleave', zoomOut);
  day.addEventListener('click', setColor);
}

function zoomIn(event) {
  event.target.style.fontSize = '30px'
}

function zoomOut(event) {
  event.target.style.fontSize = '20px'
}

function task(string) {
  const myTasks = document.querySelector('.my-tasks');
  const span = document.createElement('span');
  span.innerText = string
 myTasks.appendChild(span)
}
task('Projeto:');

function subtitle(cor) {
  const div = document.createElement('div');
  div.classList.add('task');
  div.style.backgroundColor = cor;
  const myTasks = document.querySelector('.my-tasks');
  myTasks.appendChild(div);
}

subtitle('rgb(220, 20, 60)')

const tasks = document.querySelectorAll('.task');
for (const task of tasks) {
  task.addEventListener('click', select);
}

let taskAtual = tasks;

function select() {
  const tasks = document.querySelector('.task');
  tasks.classList.toggle('selected')
}


function setColor(event) {
  let contain = taskAtual[0].classList.contains('selected');
  const select = document.querySelector('.task').style.backgroundColor;
  const initialColor = 'rgb(119,119,119)';
  if(contain){
  if(event.target.style.color !== select){
    event.target.style.color = select;
  }else {
    event.target.style.color = initialColor;
  };
}
}

const input = document.querySelector('#task-input');
const btnAdd = document.querySelector('#btn-add');

btnAdd.addEventListener('click', commitments);
input.addEventListener('keyup', function (enter) {
  key =  enter.keyCode;
  if (key === 13) {
    commitments();
  }
})

function commitments() {
  const taskList = document.querySelector('.task-list');
  const paragraph = document.createElement('p');
  if(input.value.length === 0){
    alert('Ops, você deve adicionar um compromisso!')
    return;
  }
  paragraph.innerText = input.value;
  taskList.appendChild(paragraph);
  input.value = '';
}
// 🚀 Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key.