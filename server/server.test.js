const request = require('supertest');
const { expect } = require('chai');

const { app } = require('./server');

describe('Utils', () => {
  it('should return hello world response', done => {
    request(app)
      .get('/')
      .expect(404)
      .expect(res => {
        expect(res.body).property('error', 'Page not found.');
      })
      .end(done);
  });

  it('should return my user object', done => {
    request(app)
      .get('/users')
      .expect(200)
      .expect(res => {
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.length(3);

        expect(res.body[1]).property('name', 'Andrew');
        expect(res.body[1]).property('age', 25);
      })
      .end(done);
  });
});
