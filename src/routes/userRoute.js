const { Router } = require('express');
const userController = require('../controllers/userController');
const verifyTokenMiddleware = require('../middlewares/verifyTokenMiddleware');

const userRoute = Router();

userRoute.post('/', userController.add);
userRoute.get('/', verifyTokenMiddleware, userController.list);
userRoute.get('/:id', (req, res) => {
  res.send('passou');
});

module.exports = userRoute;