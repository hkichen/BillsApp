var express = require('express');
var router = express.Router();

const statementController = require('../../controllers').statements;

// Matches with "/api/expense"
router.get('/', statementController.findAll);
router.post('/', statementController.create);

module.exports = router;