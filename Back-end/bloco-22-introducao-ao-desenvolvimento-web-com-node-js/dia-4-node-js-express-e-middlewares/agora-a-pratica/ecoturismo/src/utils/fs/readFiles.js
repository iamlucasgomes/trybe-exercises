const fs = require('fs/promises');

const readFile = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.log('Error on read file');
    console.log(err.message);
    return false;
  }
};

module.exports = { readFile };