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