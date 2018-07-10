'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Statements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        notEmpty: true
      },
      description: {
        type: Sequelize.TEXT,
        notEmpty: true
      },
      moneySource: {
        type: Sequelize.STRING,
        notEmpty: true,
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
    return queryInterface.dropTable('Statements');
  }
};