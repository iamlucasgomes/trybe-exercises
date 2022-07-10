const submit = document.querySelector('#submit');
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

      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});


function validation() {
  $('#form')
  .form({
    fields: {
      name: {
        identifier: 'nome-completo',
        rules: [
          {
            type   : 'empty',
            prompt : 'Por favor insira seu nome'
          },
          {
            type   : 'minLength[10]',
            prompt : 'Seu nome deve ter pelo menos {ruleValue} caracteres'
          },
          {
            type   : 'maxLength[40]',
            prompt : 'Seu nome deve ter menos de {ruleValue} caracteres'
          }
        ]
      },
      email: {
        identifier  : 'e-mail',
        rules: [
          {
            type   : 'email',
            prompt : 'Por favor, insira um email valido'
          },
          {
            type   : 'minLength[10]',
            prompt : 'Seu email deve ter pelo menos {ruleValue} caracteres'
          },
          {
            type   : 'maxLength[50]',
            prompt : 'Seu email deve ter menos de {ruleValue} caracteres'
          }
        ]
      },
      fields: {
        identifier  : 'descricao',
        rules: [
          {
            type   : 'maxLength[500]',
            prompt : 'Sua resposta deve ter menos de {ruleValue} caracteres'
          }
        ]
      },
      checkbox: {
        identifier  : 'termo1',
        rules: [
          {
            type   : 'checked',
            prompt : 'Por favor, marque que concorda que as imagens das suas férias poderão ser usadas na divulgação de concursos futuros'
          }
        ]
      }
    }
  })
;
}


validation();




