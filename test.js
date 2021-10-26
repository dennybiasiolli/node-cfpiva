var cfpiva = require('./cfpiva');

it('should return error with a correct CF', function (done) {
  cfpiva.controllaCF('CLLSFR02C69A944H', function (err, data) {
    expect(err).toBe(false);
    expect(data).toBe('CLLSFR02C69A944H');
    done();
  });
});

it('should return error with a wrong CF', function (done) {
  cfpiva.controllaCF('ABCDEF01B01A000X', function (err, data) {
    expect(err).toBe(true);
    expect(data).toBe('Il codice fiscale non è corretto, il codice di controllo non corrisponde.');
    done();
  });
});

it('should return error with a correct PIVA', function (done) {
  cfpiva.controllaPIVA('19172810939', function (err, data) {
    expect(err).toBe(false);
    expect(data).toBe('19172810939');
    done();
  });
});

it('should return error with a wrong PIVA', function (done) {
  cfpiva.controllaPIVA('01234567890', function (err, data) {
    expect(err).toBe(true);
    expect(data).toBe('La partita IVA non è valida: il codice di controllo non corrisponde.');
    done();
  });
});
