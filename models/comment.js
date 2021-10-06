// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize comment model (table) by extending off Sequelize's Model class
class Comment extends Model {}

// set up fields and rules for comment model
Comment.init(
{
    // define columns
  
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  date_created: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },

  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'post', 
      key: 'id',
    }
  },

  user_id: {
    type: DataTypes.INTEGER,
    references: {
    model: 'user',
    key: 'id',
    }
  }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
