const { expect } = require('chai');
const calculaSituacao = require('../src/calculaSituacao');

describe('Quando a média for menor que 7', function () {
  it('retorna "reprovação"', function () {
    const resposta = calculaSituacao(4);

    expect(resposta).equals('reprovação');
  });
});