const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const verifyTokenMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    req.user = jwt.verify(authorization, secret);
    next();
    return;
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = verifyTokenMiddleware;