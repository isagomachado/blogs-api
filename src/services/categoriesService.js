const Joi = require('joi');
const models = require('../database/models');
const { useSchema } = require('./utils');

const categoriesService = {
  validateBodyAdd: useSchema(Joi.object({
    name: Joi.string().required().max(255)
      .messages({
        'any.required': '"name" is required',
      }),
    
  })),

  async add(data) {
    const model = await models.Category.create(data);
    const newCategory = model.toJSON();

    return newCategory;
  },
};

module.exports = categoriesService;