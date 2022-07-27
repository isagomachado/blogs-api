module.exports = (sequelize, DataTypes) => {
  /** @type {import('sequelize').ModelAttributes} */
  /**
 * @param {import('sequelize').Sequelize} sequelize 
 */
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'BlogPosts',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      primaryKey: true,
    },
  },
  {
    timestamps: false,
    tableName: 'PostCategories',
  });

  return PostCategory;
};