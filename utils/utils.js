module.exports.add = (a, b) => a + b;

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  });
};

module.exports.square = x => x * x;

module.exports.asyncSquare = (a, callback) => {
  setTimeout(() => {
    callback(a * a);
  });
};

module.exports.setName = (user, fullName) => {
  const names = fullName.split(' ');
  let { firstName, lastName } = user;
  [firstName, lastName] = names;
  const newUser = Object.assign({}, user, { firstName, lastName });
  return newUser;
};
