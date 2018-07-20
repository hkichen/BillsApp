'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Expenses', [{
        category: 'Rent/Mortgage',
        avgAmount: 1200.00,
        description: 'Suntrust Bank, Piedment Condo',
        UserId: null,
        createdAt:'2018-07-15',
        updatedAt:'2018-07-15'
      },
      {
        category: 'Utilities',
        avgAmount: 200.00,
        description: 'Georgie Power, Comcast',
        UserId: null,
        createdAt:'2018-07-15',
        updatedAt:'2018-07-15'
      },
      {
        category: 'Car/Transportation',
        avgAmount: 240.00,
        description: '2018 Subaru Forester, car payment',
        UserId: null,
        createdAt:'2018-07-15',
        updatedAt:'2018-07-15'
      },
      {
        category: 'Food/Dining',
        avgAmount: 400.00,
        description: 'Work lunches and groceries',
        UserId: null,
        createdAt:'2018-07-15',
        updatedAt:'2018-07-15'
      },
      {
        category: 'Credit Card',
        avgAmount: 300.00,
        description: 'VISA, AMEX',
        UserId: null,
        createdAt:'2018-07-15',
        updatedAt:'2018-07-15'
      },
      {
        category: 'Loans',
        avgAmount: 120.00,
        description: 'School loan',
        UserId: null,
        createdAt:'2018-07-15',
        updatedAt:'2018-07-15'
      },
      {
        category: 'Medical/Health',
        avgAmount: 400.00,
        description: 'Insurance premiums',
        UserId: null,
        createdAt:'2018-07-15',
        updatedAt:'2018-07-15'
      },
      {
        category: 'Other',
        avgAmount: 300.00,
        description: 'Cell phone, Gym membership',
        UserId: null,
        createdAt:'2018-07-15',
        updatedAt:'2018-07-15'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Expenses', null, {});
  }
};
