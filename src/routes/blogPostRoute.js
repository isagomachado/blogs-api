const { Router } = require('express');
const blogPostController = require('../controllers/blogPostController');
const verifyTokenMiddleware = require('../middlewares/verifyTokenMiddleware');

const blogPostRoute = Router();

blogPostRoute.get('/', verifyTokenMiddleware, blogPostController.list);

module.exports = blogPostRoute;