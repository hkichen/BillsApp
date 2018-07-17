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

      .then(() => {
        return queryInterface.addColumn(
          'Expenses', // name of Source model
          'UserId', // name of the key we're adding 
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users', // name of Target model
              key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      })

      .then(() => {
        //Statements BelongTo User
        return queryInterface.addColumn(
          'Statements', //name of source model
          'UserId', //name of key we are adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users', //target model name
              key: 'id' //key that we are referencing is the Expense's id
            },
            onUpdate: 'CASCADE',
            OnDelete: 'CASCADE'
          }
        );
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Statements', 'ExpenseId');
  }
};
