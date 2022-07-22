const authService = require('../services/authService');
const userService = require('../services/userService');

const userController = {
  async add(req, res) {
    const { displayName, email, password, image } = req.body;
    const { value, error } = await userService.validateBodyAdd({ displayName, email, password });
    if (error) {
      return res.status(400)
        .json({ message: error.details[0].message });
    }
    const existsEmail = await userService.getByEmail(value.email);
    if (existsEmail !== null) {
      return res.status(409).json({ message: 'User already registered' });
    }
    const user = await userService.add({ displayName, email, password, image });
    const token = await authService.makeToken(user);
    return res.status(201).json({ token });
  },
};

module.exports = userController;