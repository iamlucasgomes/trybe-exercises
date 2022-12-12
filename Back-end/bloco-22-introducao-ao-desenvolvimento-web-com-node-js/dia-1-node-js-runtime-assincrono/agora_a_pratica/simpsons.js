const fs = require('fs').promises;
const path = require('path');

const diretorio = './src/assets/simpsons.json';

// A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

const charactersList = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, diretorio));
    const result = JSON.parse(data);
    result.map((simpson) => 
    console.log(`${Object.values(simpson)[0]} - ${Object.values(simpson)[1]}`));
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
};

// B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.

const requestJson = async (id) => {
  const data = await fs.readFile(path.resolve(__dirname, diretorio));
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

// C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const editJson = async () => {
  const data = await fs.readFile(path.resolve(__dirname, diretorio));
  const result = JSON.parse(data);

  try {
    await fs.writeFile(path.resolve(__dirname, diretorio), JSON.stringify(result
    .filter((simpson) => Number(simpson.id) !== 6 && Number(simpson.id) !== 10)));
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
};

// D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

const simpsonFamily = async () => {
  const data = await fs.readFile(path.resolve(__dirname, diretorio));
  const result = JSON.parse(data);

  try {
    await fs.writeFile(path
      .resolve(__dirname, './src/assets/simpsonFamily.json'), JSON.stringify(result
    .filter((simpson) => Number(simpson.id) <= 4)));
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
};

const addNelson = async () => {
  const data = await fs.readFile(path.resolve(__dirname, './src/assets/simpsonFamily.json'));
  const result = JSON.parse(data);

  try {
    await fs.writeFile(path
      .resolve(__dirname, './src/assets/simpsonFamily.json'), JSON
      .stringify([...result, { id: String(result.length + 1), name: 'Nelson Muntz' }]));
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
};
