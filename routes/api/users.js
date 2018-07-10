var express = require('express');
var router = express.Router();
const userController = require('../../controllers').users;
const User = require('../../models').User;

// let users = [
//   {id: "1", name: 'Lina'},
//   {id: "2", name: 'Ryan'},
//   {id: "3", name: 'John'}
//  ];
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.json(users);
// });

router.get('/:userId', function(req, res, next) {
  res.json(users.find((user) => user.id === req.params.userId));
});
//create a new user route
router.post('/', userController.create);

//find all users
router.get('/', userController.findAll);
module.exports = router;