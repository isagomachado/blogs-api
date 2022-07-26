const { throwInvalidIdError } = require('../services/utils.js');

const verifyIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  const result = id !== Number(id);
  if (!result) throwInvalidIdError('Invalid ID');
  next();
};

module.exports = verifyIdMiddleware;