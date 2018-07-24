var express = require('express');
var router = express.Router();

const statementController = require('../../controllers').statement;

// Matches with "/api/statements"
router.get('/', statementController.findAll);
router.post('/', statementController.create);

//create a new statement that has a userId and ExpenseId
router.get('/:userId/:expenseId', statementController.findWithIds);
router.get('/:userId', statementController.statementsForUser);

//create a new statement with userId and ExpenseId
router.post('/:userId/:expenseId', statementController.createWithIds);
module.exports = router;