const submit = document.querySelector('#submit');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const termo = document.querySelector('#termo1');
const textArea = document.querySelector('#description')

function stopSend(event) {
  event.preventDefault();
}

function maxAndMinLenght(event) {
  if (nome.value.length < 10 || email.value.length < 10 || nome.value.length > 40 || email.value.length > 50 || termo.checked === false || textArea.value.length > 500) {
    event.preventDefault();
    return alert('Dados Inválidos');
  }
  alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
}


submit.addEventListener('click', maxAndMinLenght)
// submit.addEventListener('click', stopSend);