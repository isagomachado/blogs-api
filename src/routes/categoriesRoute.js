const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');
const verifyTokenMiddleware = require('../middlewares/verifyTokenMiddleware');

const categoriesRoute = Router();

categoriesRoute.get('/', verifyTokenMiddleware, categoriesController.list);
categoriesRoute.post('/', verifyTokenMiddleware, categoriesController.add);

module.exports = categoriesRoute;