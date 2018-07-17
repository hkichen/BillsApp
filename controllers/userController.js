const User = require('../models').User;

// methods for user: find, create, update, delete
//These methods ONLY respond with a json
module.exports = {
  findAll: function(req, res) {
    User.all().then(dbUsers => res.json(dbUsers))
    .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    User.findById(req.params.id)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  },

  //to sign up a new user
  create: function(req, res) {
    User.create(req.body)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  },

  //to update user info
  update: function(req, res) {
    User.findById(req.params.id)
      .then((user) => {
        user.update(req.body)
          .then(() => res.json(user.get()));
      });
  },


  //option to delete account
  remove: function(req, res) {
    User.findById(req.params.id)
      .then(user => {
        return user.destroy();
      }).then(() => res.send("User deleted!"))
  }
};
