const Expense = require('../models').Expense;

module.exports = {
  update: function(req, res) {
    Expense.findById(req.params.id).then(function(expense) {
      expense.update(req.body).then(() => res.json(expense));
    });
  },
  findAll: function(req, res) {
    Expense.findAll({})
      .then(dbExpense => res.json(dbExpense))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    Expense.create({
      category: req.body.category,
      avgAmount: req.body.avgAmount,
      description: req.body.description
    })
      .then(dbExpense => res.json(dbExpense))
      .catch(err => res.status(422).json(err));
  },

  findByUserID: function(req, res) {
    Expense.findall({
      where: {
        userId: "google-oauth2%7C117865706151901461462"
      }
    })
      .then(dbExpense => res.json(dbExpense))
      .catch(err => res.send(err));
  },
  
  bulkCreatewithID: function(req, res) {
    Expense.bulkCreate([{
      category: 'Rent/Mortgage',
      avgAmount: 1200.00,
      description: 'Suntrust Bank, Piedment Condo',
      userId: 'google-oauth2%7C117865706151901461462',
      createdAt:'2018-07-15',
      updatedAt:'2018-07-15'
    },
    {
      category: 'Utilities',
      avgAmount: 200.00,
      description: 'Georgie Power, Comcast',
      userId: 'google-oauth2%7C117865706151901461462',
      createdAt:'2018-07-15',
      updatedAt:'2018-07-15'
    },
    {
      category: 'Car/Transportation',
      avgAmount: 240.00,
      description: '2018 Subaru Forester, car payment',
      userId: 'google-oauth2%7C117865706151901461462',
      createdAt:'2018-07-15',
      updatedAt:'2018-07-15'
    },
    {
      category: 'Food/Dining',
      avgAmount: 400.00,
      description: 'Work lunches and groceries',
      userId: 'google-oauth2%7C117865706151901461462',
      createdAt:'2018-07-15',
      updatedAt:'2018-07-15'
    },
    {
      category: 'Credit Card',
      avgAmount: 300.00,
      description: 'VISA, AMEX',
      userId: 'google-oauth2%7C117865706151901461462',
      createdAt:'2018-07-15',
      updatedAt:'2018-07-15'
    },
    {
      category: 'Loans',
      avgAmount: 120.00,
      description: 'School loan',
      userId: 'google-oauth2%7C117865706151901461462',
      createdAt:'2018-07-15',
      updatedAt:'2018-07-15'
    },
    {
      category: 'Medical/Health',
      avgAmount: 400.00,
      description: 'Insurance premiums',
      userId: 'google-oauth2%7C117865706151901461462',
      createdAt:'2018-07-15',
      updatedAt:'2018-07-15'
    },
    {
      category: 'Other',
      avgAmount: 300.00,
      description: 'Cell phone, Gym membership',
      userId: 'google-oauth2%7C117865706151901461462',
      createdAt:'2018-07-15',
      updatedAt:'2018-07-15'
    },
  ])
  .then(dbExpenses => res.json(dbExpenses))
  .catch(err => res.json(err))
  }
};
