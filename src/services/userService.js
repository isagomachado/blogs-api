const Joi = require('joi');
const models = require('../database/models');
const { useSchema } = require('./utils');

const userService = {
  validateBodyAdd: useSchema(Joi.object({
    displayName: Joi.string().required().max(255)
      .min(8)
      .messages({
        'array.min': '"displayName" length must be at least 8 characters long',
      }),
    email: Joi.string().email().required().max(255)
      .min(1)
      .messages({
        'string.email': '"email" must be a valid email',
      }),

    password: Joi.string().required().max(255).min(6)
      .messages({
        'array.min': '"password" length must be at least 6 characters long',
      }),
  })),

  async getByEmail(email) {
    const user = await models.User.findOne({
      where: { email },
      raw: true,
    });

    return user;
  },

  async add(data) {
    const model = await models.User.create(data);
    const newUser = model.toJSON();

    return newUser;
  },

  async list() {
    const users = await models.User.findAll({
      attributes: { exclude: ['password']},
    });
    return users;
  },
};

module.exports = userService;