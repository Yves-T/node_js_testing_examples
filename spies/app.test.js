const { expect } = require('chai');
const sinon = require('sinon');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
  const db = {
    saveUser: sinon.spy()
  };
  app.__set__('db', db);
  it('should call the spy correctly', () => {
    const email = 'someEmail@example.com';
    const password = '123';
    app.handleSignup(email, password);
    expect(db.saveUser.callCount).to.equal(1);
  });
});
