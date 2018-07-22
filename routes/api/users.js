var express = require('express');
var router = express.Router();
const userController = require('../../controllers').users;

//get user data by id prodived by Auth0 login
//this api route makes another api call to Auth0 to get user info
router.get('/:id', userController.findById);

//create a new user route
router.post('/', userController.create);

//find all users
router.get('/', userController.findAll);

//update user by id provided by Auth0
//this api route makes another api call to Auth0 to
//update user information
router.post('/:id', userController.update);

//delete user by id
router.delete('/:id', userController.remove);

module.exports = router;