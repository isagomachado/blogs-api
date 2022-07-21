require('dotenv').config();
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { throwUnauthorizedError, useSchema } = require('./utils');

const secret = process.env.JWT_SECRET;

const authService = {
  validateBodyLogin: useSchema(Joi.object({
    email: Joi.string().required().email().max(255)
      .min(1)
      .messages({
        'any.required': 'Some required fields are missing',
      }),

    password: Joi.string().required().max(255).min(1)
      .messages({
        'any.required': 'Some required fields are missing',
      }),
  })),

  async makeToken(data) {
    const { email } = data;
    const payload = { data: { email } };
    const token = jwt.sign(payload, secret);
    return token;
  },

  async readToken(token) {
    try {
      const { data } = jwt.verify(token, secret);
      return data;
    } catch (err) {
      throwUnauthorizedError('Invalid fields');
    }
  },
};

module.exports = authService;