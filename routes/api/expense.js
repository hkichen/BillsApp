var express = require('express');
var router = express.Router();

const expenseController = require('../../controllers').expenses;

// Matches with "/api/expense"
router.get('/', expenseController.findAll);
router.post('/', expenseController.create);
router.put('/:id', expenseController.update);

router.get('/:id', expenseController.findByUserID);
router.post('/bulk', expenseController.bulkCreatewithID);

module.exports = router;
