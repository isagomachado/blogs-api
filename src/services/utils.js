const throwNotFoundError = (message) => {
  const error = new Error(message);
  error.name = 'NotFoundError';
  throw error;
};

const throwUnauthorizedError = (message) => {
  const err = new Error(message);
  err.name = 'UnauthorizedError';
  throw err;
};

const useSchema = (schema) => async (aux) => {
  const value = await schema.validate(aux);
  return value;
};

module.exports = {
  throwNotFoundError,
  throwUnauthorizedError,
  useSchema,
};