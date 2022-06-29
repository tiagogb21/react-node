const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '20m',
  algorithm: 'HS256',
};

const senhaSecreta = process.env.JWT_SECRET;

const generateJWT = (payload) => {
  const generateToken = jwt.sign({ data: payload }, senhaSecreta, jwtConfig);
  return generateToken;
};

module.exports = generateJWT;
