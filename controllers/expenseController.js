const Expense = require('../models').Expense;

module.exports = {
  update: function(req, res) {
    Expense.update(req.body)
      .then(dbExpense => res.json(dbExpense))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    Expense.findAll({
      where: {
        column: avgAmount
      }
    })
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
