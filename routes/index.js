var express = require('express');
var router = express.Router();


//home route
router.get('/', function(req, res, next) {
  res.json({ title: "Express Server side api data" });
});

module.exports = router;
