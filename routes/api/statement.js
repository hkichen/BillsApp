var express = require('express');
var router = express.Router();

const statementController = require('../../controllers').statement;

// Matches with "/api/statements"
router.get('/', statementController.findAll);
router.post('/', statementController.create);

module.exports = router;