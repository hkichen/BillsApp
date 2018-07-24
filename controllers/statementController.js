const Statement = require('../models').Statement;
const Expense = require('../models').Expense;

module.exports = {
  create: function (req, res) {
    Statement.create({
      category: req.body.category,
      amount: req.body.amount,
      description: req.body.description,
      moneySource: req.body.moneySource,
      autoPay: req.body.autoPay,
      photo: req.body.photo
    })
    .then(dbStatement => res.json(dbStatement))
    .catch(err => res.status(422).json(err));
  },
  
  findAll: function (req, res) {
    Statement.findAll({})
    .then(dbStatement => res.json(dbStatement))
    .catch(err => res.status(422).json(err));
  },

  findWithIds: function (req, res) {
    Statement.findAll({
      where: {
        ExpenseId: req.params.ExpenseId,
        userId: req.params.userId
      }
    })
    .then(dbStatements => res.json(dbStatements))
    .catch(err => res.send(err));
  },

  statementsForUser: function(req, res) {
    Statement.findAll({
      where: {
        userId: req.params.userId
      }
    })
    .then(statements => res.json(statements))
    .catch(err => res.send(err))
  },

  //create a statement linked to an expense 
  createWithIds: function (req, res) {
    Expense.findById(req.params.expenseId)
      .then(function(expense) {
        let statement = Statement.create({
          category: req.body.category,
          amount: req.body.amount,
          description: req.body.description,
          moneySource: req.body.moneySource,
          autoPay: req.body.autoPay,
          photo: req.body.photo,
          userId: req.params.userId
        })
        .then(statement => 
          statement.setExpense(expense)
            .then(statement => res.json(statement))
        )
      })
  }
}

