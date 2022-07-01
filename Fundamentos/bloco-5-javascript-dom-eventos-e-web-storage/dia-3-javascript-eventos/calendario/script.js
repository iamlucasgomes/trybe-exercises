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
  for (const friday of fridays) {
     friday.innerText = 'SextouBB'
    }
  } 


// 🚀 Exercício 5:
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.
