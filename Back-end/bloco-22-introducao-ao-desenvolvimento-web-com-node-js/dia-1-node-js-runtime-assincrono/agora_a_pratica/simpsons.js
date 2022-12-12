const fs = require('fs').promises;
const path = require('path');

// A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

const charactersList = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, './src/assets/simpsons.json'));
    const result = JSON.parse(data);
    result.map((simpson) => 
    console.log(`${Object.values(simpson)[0]} - ${Object.values(simpson)[1]}`));
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
};

charactersList();

// B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.

const requestJson = async (id) => {
  const data = await fs.readFile(path.resolve(__dirname, './src/assets/simpsons.json'));
  const result = JSON.parse(data);

  const findId = result.find((character) => Number(character.id) === id);

const promise = new Promise((resolve, reject) => {
  if (findId) {
    resolve(console.log(findId));
  } else {
    reject(Error('id não encontrado'));
  }

  console.log(promise);
});
};

requestJson(1);