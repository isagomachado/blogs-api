const blogPostService = require('../services/blogPostService');

const blogPostController = {
  /** @type {import('express').RequestHandler} */
  async list(req, res) {
    const posts = await blogPostService.list();
    return res.status(200).json(posts);
  },
};

module.exports = blogPostController;
