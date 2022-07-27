const models = require('../database/models');

const blogPostService = {
  async list() {
    const model = await models.BlogPost.findAll({
      include: [
        {
          model: models.User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: models.Category,
          as: 'categories',
        },
      ],
    });

    return model;
  },
};

module.exports = blogPostService;