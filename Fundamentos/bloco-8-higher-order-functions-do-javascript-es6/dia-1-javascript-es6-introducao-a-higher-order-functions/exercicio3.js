// 3 - Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (Gabarito);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for "N.A");
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const score = (template, answers) => {
  let total = 0;
  for (let index = 0; index < template.length; index += 1) {
    if (template[index] === answers[index]) {
      total += 1;
    } else if (answers[index] === 'N.A') {
      total += 0;
    } else {
      total -= 0.5;
    }
  }
  return total;
};

const reviewer = (template, answers, score) => `Total de pontos: ${score(template, answers)}`;

console.log(reviewer(RIGHT_ANSWERS, STUDENT_ANSWERS, score));