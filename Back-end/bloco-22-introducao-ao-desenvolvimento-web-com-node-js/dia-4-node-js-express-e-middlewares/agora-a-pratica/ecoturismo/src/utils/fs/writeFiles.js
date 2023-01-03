const fs = require('fs').promises;
const path = require('path');

const diretorio = '../files/authData.json';

async function writeJson(newUser) {
await fs.writeFile(path.resolve(__dirname, diretorio), JSON.stringify(newUser, null, 2));
}

module.exports = writeJson;