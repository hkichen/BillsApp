var express = require('express');
var router = express.Router();

let users = [
  {id: "1", name: 'Lina'},
  {id: "2", name: 'Ryan'},
  {id: "3", name: 'John'}
];

/* GET users listing. */
router.get('/', function(req, res) {
  res.json(users);
});

router.get('/:userId', function(req, res) {
  res.json(users.find((user) => user.id === req.params.userId));
});

module.exports = router;