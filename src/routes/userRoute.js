const { Router } = require('express');
const userController = require('../controllers/userController');
const verifyTokenMiddleware = require('../middlewares/verifyTokenMiddleware');
const verifyIdMiddleware = require('../middlewares/verifyIdMiddleware');

const userRoute = Router();

userRoute.post('/', userController.add);
userRoute.get('/', verifyTokenMiddleware, userController.list);
userRoute.get('/:id', verifyTokenMiddleware, verifyIdMiddleware, userController.getById);

module.exports = userRoute;