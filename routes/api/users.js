var express = require('express');
var router = express.Router();
const userController = require('../../controllers').users;


router.get('/:id', userController.findById);

//create a new user route
router.post('/', userController.create);

//find all users
router.get('/', userController.findAll);
module.exports = router;