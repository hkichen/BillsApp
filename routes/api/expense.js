var express = require('express');
var router = express.Router();

const expenseController = require('../../controllers').expenses;

// Matches with "/api/expense"
router.get('/', expenseController.findAll);
router.post('/', expenseController.create);
router.put('/', expenseController.update);

module.exports = router;
