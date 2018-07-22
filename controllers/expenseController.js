const Expense = require('../models').Expense;

module.exports = {
  update: function(req, res) {
    console.log('hit the controller');
    console.log(req.params.id);
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
  }
};
