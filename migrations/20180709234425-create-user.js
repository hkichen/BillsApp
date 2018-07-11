'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        notEmpty: true,
      },
      lastName: {
        type: Sequelize.STRING,
        notEmpty: true,
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
          notEmpty: true,
        }
      },
      password: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
