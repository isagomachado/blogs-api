module.exports = (sequelize, DataTypes) => {
  /** @type {import('sequelize').ModelAttributes} */
  /**
 * @param {import('sequelize').Sequelize} sequelize 
 */
  const User = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true 
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STING,
    image: DataTypes.STING,
  },
  {
    timestamps: false,
    tableName: 'Users',
  });

  return User;
};