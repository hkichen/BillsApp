var express = require('express');
var router = express.Router();

const expenseController = require('../../controllers').expenses;

// Matches with "/api/expense"
router.get('/', expenseController.findAll);
router.put('/', expenseController.create);

module.exports = router;
