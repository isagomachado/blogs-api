const { Router } = require('express');
const userController = require('../controllers/userController');
const verifyTokenMiddleware = require('../middlewares/verifyTokenMiddleware');
const verifyIdMiddleware = require('../middlewares/verifyIdMiddleware');

const userRoute = Router();

userRoute.get('/:id', verifyTokenMiddleware, verifyIdMiddleware, userController.getById);
userRoute.post('/', userController.add);
userRoute.get('/', verifyTokenMiddleware, userController.list);

module.exports = userRoute;