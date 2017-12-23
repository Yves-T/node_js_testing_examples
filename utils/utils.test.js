const utils = require('./utils');
const { expect } = require('chai');

it('should add two numbers', () => {
  const res = utils.add(33, 11);
  expect(res).to.be.equal(44);

  // .toBeA('number');
});

it('should async add two numbers', done => {
  utils.asyncAdd(4, 3, sum => {
    expect(sum).to.equal(7);
    expect(sum).to.be.a('number');
    done();
  });
});

it('should square a number', () => {
  const res = utils.square(3);
  expect(res).to.be.equal(9);
});

it('should async square a number', done => {
  utils.asyncSquare(5, res => {
    expect(res).to.equal(25);
    expect(res).to.be.a('number');
    done();
  });
});

it('should set first and last names', () => {
  const user = { location: 'Philadelphia', age: 25 };
  const res = utils.setName(user, 'Andrew Mead');
  expect(res).to.have.deep.property('firstName', 'Andrew');
  expect(res).to.have.deep.property('lastName', 'Mead');
});
