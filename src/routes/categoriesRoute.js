const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');
const verifyTokenMiddleware = require('../middlewares/verifyTokenMiddleware');
// const verifyIdMiddleware = require('../middlewares/verifyIdMiddleware');

const categoriesRoute = Router();

categoriesRoute.post('/', verifyTokenMiddleware, categoriesController.add);

module.exports = categoriesRoute;