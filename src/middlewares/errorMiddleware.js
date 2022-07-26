const errors = {
  ValidationError: 400,
  UnauthorizedError: 401,
  NotFoundError: 404,
  InvalidIdError: 400,
  SequelizeUniqueConstraintError: 409,
};

/**
 * @param {Error} err 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
const errorMidleware = ({ name, message }, _req, res, _next) => {
  const status = errors[name];
  if (!status) return res.sendStatus(500).json({ message });
  res.status(status).json({ message });
};

module.exports = errorMidleware;