// const submit = document.querySelector('#submit');
// const nome = document.querySelector('#nome');
// const email = document.querySelector('#email');
// const termo = document.querySelector('#termo1');
// const textArea = document.querySelector('#description')

// function stopSend(event) {
//   event.preventDefault();
// }

// function maxAndMinLenght(event) {
//   if (nome.value.length < 10 || email.value.length < 10 || nome.value.length > 40 || email.value.length > 50 || termo.checked === false || textArea.value.length > 500) {
//     event.preventDefault();
//     return alert('Dados Inválidos');
//   }
//   alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
// }


// submit.addEventListener('click', maxAndMinLenght)
// submit.addEventListener('click', stopSend);

var picker = new Pikaday({ field: document.getElementById('data') });

var date = new Pikaday({
  field: document.getElementById('data'),
  format: 'D/M/YYYY',
  toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});

const validate = new window.JustValidate('#form');
const validation = new JustValidate('#form');

validation
  .addField('#nome', [
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'O campo deve conter no mínimo 10 caracteres'
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O campo deve conter no máximo 40 caracteres'
    },
    {
      rule: 'required',
      errorMessage: 'Por favor, preencha seu nome!',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email é obrigatorio',
    },
    {
      rule: 'email',
      errorMessage: 'Email inválido',
    },
    {
    rule: 'minLength',
    value: 10,
  },
  {
    rule: 'maxLength',
    value: 50,
  },
  ]);
  validation
  .addField('#description', [
  {
    rule: 'maxLength',
    value: 500,
    errorMessage: 'O campo deve conter no máximo 500 caracteres'
  },
  ]);