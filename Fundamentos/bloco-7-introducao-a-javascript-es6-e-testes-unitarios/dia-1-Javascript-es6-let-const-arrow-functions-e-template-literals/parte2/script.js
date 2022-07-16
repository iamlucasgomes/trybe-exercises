const text = document.getElementById('paragraph');
const btnClick = document.getElementById('btn-click');
const defaultMessage = document.getElementById('default-text');
const thanks = document.getElementById('thanks');

let count = 0;
const accumulateClicks = () => {
 if(btnClick.click){
  count += 1;
 }
}

btnClick.addEventListener('click', accumulateClicks);

const showNumber = () => { 
  
  if(count < 10){
    text.innerText = `Você deu ${count} clique!`;
  } else {
  text.innerText = `Você deu ${count} cliques!`;
}
}
btnClick.addEventListener('click', showNumber);


const clickOn = () => {
  const teste = () => {btnClick.innerHTML = 'Clica em mim 🥺'};
 btnClick.innerText = '🥰🥰🥰';

 const myTimeout = setTimeout(teste, 300);
}
btnClick.addEventListener('click', clickOn);

