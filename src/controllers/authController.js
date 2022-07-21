const authService = require('../services/authService');
const userService = require('../services/userService');

const authController = {
  async login(req, res) {
    const { value, error } = await authService.validateBodyLogin(req.body);

    if (error) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await userService.getByEmail(value.email);

    if (!user) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
 
    const token = await authService.makeToken(user);
    
    return res.status(200).json({ token });
  },
};

module.exports = authController;