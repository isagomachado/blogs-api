const categoriesService = require('../services/categoriesService');

const categoriesController = {
  /** @type {import('express').RequestHandler} */
  async add(req, res) {
    const { error, value } = await categoriesService.validateBodyAdd(req.body);

    if (error) {
      return res.status(400)
        .json({ message: error.details[0].message });
    }
    
    const Category = await categoriesService.add(value);

    return res.status(201).json(Category);
  },

  /** @type {import('express').RequestHandler} */
  async list(req, res) {
    const categories = await categoriesService.list();
    return res.status(200).json(categories);
  },
};

module.exports = categoriesController;