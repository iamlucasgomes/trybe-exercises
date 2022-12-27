const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');
const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp);

const mintIntense = 'Mint Intense';
const whiteCoconut = 'White Coconut';

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: mintIntense,
      brandId: 1,
    },
    {
      id: 2,
      name: whiteCoconut,
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Testando a API Cacau Trybe', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile').resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: mintIntense, brandId: 1 },
        { id: 2, name: whiteCoconut, brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai
        .request(app)
        .get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal(
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        },
);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/99');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' });
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: mintIntense,
          brandId: 1,
        },
        {
          id: 2,
          name: whiteCoconut,
          brandId: 1,
        },
      ]);
    });
  });

  describe(
'Usando o método GET em /chocolates/total para buscar a quantidade total de chocolates',
  function () {
    it('Retornar a quantidade de tipos de chocolates que existem.', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/total');

        const output = {
          totalChocolates: 4,
        };

        expect(response.body.totalChocolates).to.be.equal(4);
        expect(response.status).to.be.equal(200);
        expect(response.body).to.deep.equal(output);
    });
  },
);

describe('Usando o método Get em /chocolates/search, pesquise chocolates por nome', function () {
  it(
'Esse endpoint deve retornar os chocolates que contém uma determinada palavra em seu nome',
  async function () {
    const response = await chai
        .request(app)
        .get('/chocolates/search?name=mo');

        const output = [
          {
            id: 3,
            name: 'Mon Chéri',
            brandId: 2,
          },
          {
            id: 4,
            name: 'Mounds',
            brandId: 3,
          },
        ];

        expect(response.status).to.be.equal(200);
        expect(response.body).to.deep.equal(output);
  },
);
it(
'se o não for encontrado correspondencia no banco de dados, deve retornar um array vazio', 
async function () {
  const response = await chai
  .request(app)
  .get('/chocolates/search?name=ca');

  const output = [];
  
  expect(response.status).to.be.equal(404);
  expect(response.body).to.deep.equal(output);
},
);
});
});