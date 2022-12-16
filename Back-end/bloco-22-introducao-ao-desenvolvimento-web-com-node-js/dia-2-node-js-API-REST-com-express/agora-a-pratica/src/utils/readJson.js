const fs = require('fs').promises;
const path = require('path');

async function readJson() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../movies.json'));
    console.log(JSON.parse(data));
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

readJson()
module.exports = readJson;