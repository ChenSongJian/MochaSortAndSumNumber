const request = require('supertest');
const app = require('../app.js');

describe('POST /sumNumbers', () => {
  describe('missing required parameters checks', () => {
    it('should return a 400 error if parameters a and b are missing', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b are required") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if only parameter a is missing', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({b:1})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b are required") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if only parameter b is missing', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:1})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b are required") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });
  });

  describe('parameters invalid type checks', () => {
    it('should return a 400 error if parameter a is a float', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:1.1, b:1})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be integer") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if parameter a is a string', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:'1', b:1})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be integer") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if parameter a is a boolean', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:true, b:1})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be integer") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if parameter a is an array', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:[1], b:1})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be integer") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if parameter a is an object', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:{1:1}, b:1})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be integer") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if parameter a is null', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:null, b:1})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be integer") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if parameter b is a float', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:1, b:12.34})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be integer") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if parameter b is a string', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:1, b:'1'})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be integer") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if parameter b is a boolean', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:1, b:true})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be integer") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if parameter b is an array', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:1, b:[1]})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be integer") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if parameter b is an object', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:1, b:{1:1}})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be integer") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if parameter b is null', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:1, b:null})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be integer") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });
  });

  describe('parameter invalid value checks', () => {
    it('should return a 400 error if parameter a < 0', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:-1, b:1})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be between 0 and 100") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if parameter a < 0 and it is extremly small', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:-99999999999, b:1})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be between 0 and 100") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if parameter a > 100', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:101, b:1})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be between 0 and 100") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if parameter a > 100 and it is extremly large', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:111111111111, b:1})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be between 0 and 100") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if parameter b < 0', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:1, b:-1})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be between 0 and 100") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if parameter b < 0 and it is extremly small', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:1, b:-99999999999})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be between 0 and 100") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if parameter b > 100', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:1, b:101})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be between 0 and 100") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });

    it('should return a 400 error if parameter b > 100 and it is extremly large', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:1, b:111111111111})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "Both parameters a and b must be between 0 and 100") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        });
    });
  });

  describe('parameter valid values compare check', () => {
    it('should return a 400 response if valid integer a equals to valid integer b', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:50, b:50})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "a must be less than b") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        })
    });

    it('should return a 400 response if valid integer a larger than valid integer b', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:50, b:49})
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.message !== "a must be less than b") {
            return done(new Error(`Unexpected response message: ${res.body.message}`));
          }
          done();
        })
    });
  });

  describe('parameter valid sum check', () => {
    it('should return a 200 response with the correct total sum of valid integers a and b', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:0, b:100})
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.sum !== 5050) {
            return done(new Error(`Unexpected sum: ${res.body.sum}`));
          }
          done();
        });
    });

    it('should return a 200 response with the correct total sum of consecutive valid integers a and b', (done) => {
      request(app)
        .post('/sumNumbers')
        .send({a:99, b:100})
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.sum !== 199) {
            return done(new Error(`Unexpected sum: ${res.body.sum}`));
          }
          done();
        });
    });
  });
});