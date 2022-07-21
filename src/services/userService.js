const models = require('../database/models');

const userService = {
  async getByEmail(email) {
    const user = await models.User.findOne({
      where: { email },
      raw: true,
    });

    return user;
  },
};

module.exports = userService;