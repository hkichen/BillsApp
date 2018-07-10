'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      notEmpty: true,
    },
    lastName: {
      type: DataTypes.STRING,
      notEmpty: true,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  });
  
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};