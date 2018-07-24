'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn(
        //Statements belong to Expenses
        'Statements', //name of source model
        'ExpenseId', //name of key we are adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Expenses', //target model name
            key: 'id' //key that we are referencing is the Expense's id
          },
          onUpdate: 'CASCADE',
          OnDelete: 'CASCADE'
        }
      )
    },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Statements', 'ExpenseId');
  }
};
