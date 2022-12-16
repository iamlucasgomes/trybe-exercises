const fs = require('fs').promises;
const path = require('path')

const diretorio = '../movies.json';

async function writeJson(newMovie) {
  const data = await fs.readFile(path.resolve(__dirname, diretorio));
  const result = JSON.parse(data);

  await fs.writeFile(path.resolve(__dirname, diretorio), JSON.stringify(newMovie));
  return;

}

module.exports = writeJson;