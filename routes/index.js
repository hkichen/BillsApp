var express = require('express');
var router = express.Router();


//home api route
app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"))
})


module.exports = router;
