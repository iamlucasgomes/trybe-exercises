const uppercase = require('./exercise07');

describe('Testes da função uppercase', () => {
  it('A string test deve retornar TEST', (done) => {
    uppercase('test', (str) => {
      try {
        expect(str).toBe('TEST');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
test('A string lucas deve retornar LUCAS', done => {
  uppercase('lucas', (str) => {
    try {
      expect(str).toBe('LUCAS');
      done();
    } catch (error) {
      done(error);
    }
  })
});
});