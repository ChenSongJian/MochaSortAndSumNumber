const request = require('supertest');
const app = require('../app.js');

describe('POST /sortNumbers', () => {
  it('should return a 400 error if numbers parameter is missing', (done) => {
    request(app)
      .post('/sortNumbers')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        if (res.body.message !== "numbers parameter is required") {
          return done(new Error(`Unexpected response message: ${res.body.message}`));
        }
        done();
      });
  });

  describe('number parameters invalid type checks', () =>{
    it('should return a 400 error if numbers parameter is an integer number', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: 123 })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must be an array") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if numbers parameter is a float number', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: 123.45 })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must be an array") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if numbers parameter is a string', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: '[1,2,3]' })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must be an array") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if numbers parameter is a boolean', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: true })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must be an array") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if numbers parameter is object', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: {} })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must be an array") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if numbers parameter is null', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: null })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must be an array") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });
  });

  describe('number parameters invalid number of elements checks', () => {
    it('should return a 400 error if numbers parameter has no element', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: [] })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must contain exactly 10 elements, 0 found") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if numbers parameter has 1 element', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: [1] })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must contain exactly 10 elements, 1 found") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if numbers parameter has 9 element', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: [10, 9, 8, 7, 6, 5, 4, 3, 2] })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must contain exactly 10 elements, 9 found") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if numbers parameter has 11 element', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2] })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must contain exactly 10 elements, 11 found") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });
  });

  describe('number parameters invalid element type checks', () => {
    it('should return a 400 error if the 10 element in numbers parameter contains alphanumeric string', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: ["123abc", 10, 9, 8, 7, 6, 5, 4, 3, 2] })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must only contain numbers") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if the 10 element in numbers parameter contains numeric string', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: ["123", 10, 9, 8, 7, 6, 5, 4, 3, 2] })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must only contain numbers") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if the 10 element in numbers parameter contains boolean', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: [true, 10, 9, 8, 7, 6, 5, 4, 3, 2] })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must only contain numbers") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if the 10 element in numbers parameter contains array', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: [[1], 10, 9, 8, 7, 6, 5, 4, 3, 2] })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must only contain numbers") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if the 10 element in numbers parameter contains object', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: [{1:1}, 10, 9, 8, 7, 6, 5, 4, 3, 2] })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must only contain numbers") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if the 10 element in numbers parameter contains null', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: [null, 10, 9, 8, 7, 6, 5, 4, 3, 2] })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must only contain numbers") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });
  });

  describe('number parameters invalid element value checks', () => {
    it('should return a 400 error if any of the 10 elements in numbers parameter has value < 0', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: [-1, 10, 9, 8, 7, 6, 5, 4, 3, 2] })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must only contain numbers between 0 and 100") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if any of the 10 elements in numbers parameter has extremely small value < 0', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: [-99999999999, 10, 9, 8, 7, 6, 5, 4, 3, 2] })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must only contain numbers between 0 and 100") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if any of the 10 elements in numbers parameter has value > 100', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: [11, 10, 9, 8, 7, 6, 101, 4, 3, 2] })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must only contain numbers between 0 and 100") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if any of the 10 elements in numbers parameter has extremly large value > 100', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: [111111111111, 10, 9, 8, 7, 6, 101, 4, 3, 2] })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must only contain numbers between 0 and 100") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if duplicated element found in the 10 elements in numbers parameter', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: [11, 10, 9, 8, 7, 6, 11, 4, 3, 2] })
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "numbers parameter must not contain duplicate values") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });
  });

  describe('number parameters valid emelents sorting checks', () => {
    it('should return 200 with sorted elements if 10 valid integers in numbers parameter', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: [4, 12, 7, 26, 9, 28, 100, 0, 1, 99] })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          if (JSON.stringify(res.body.numbers) !== JSON.stringify([0, 1, 4, 7, 9, 12, 26, 28, 99, 100])) {
            return done(new Error(`Response numbers array not sorted: ${res.body.numbers}`));
          }
          done();
        });
    });

    it('should return 200 with sorted elements if 10 valid float in numbers parameter', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: [4.0, 12.1, 7.2, 26.3, 9.4, 28.5, 0.1, 100, 99.9, 0.0] })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          if (JSON.stringify(res.body.numbers) !== JSON.stringify([0.0, 0.1, 4.0, 7.2, 9.4, 12.1, 26.3, 28.5, 99.9, 100.0])) {
            return done(new Error(`Response numbers array not sorted: ${res.body.numbers}`));
          }
          done();
        });
    });

    it('should return 200 with sorted elements if 10 valid integer and float in numbers parameter', (done) => {
      request(app)
        .post('/sortNumbers')
        .send({ numbers: [4, 12.1, 7.2, 26, 9.4, 28.5, 0, 100, 0.1, 99.9] })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          if (JSON.stringify(res.body.numbers) !== JSON.stringify([0, 0.1, 4, 7.2, 9.4, 12.1, 26, 28.5, 99.9, 100])) {
            return done(new Error(`Response numbers array not sorted: ${res.body.numbers}`));
          }
          done();
        });
    });
  });
});
