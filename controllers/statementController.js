const Statement = require('../models').Statement;

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
        Expense.findAll({})
            .then(dbStatement => res.json(dbStatement))
            .catch(err => res.status(422).json(err));
    }
}

