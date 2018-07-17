const User = require('../models').User;

// methods for user: find, create, update, delete
//These methods ONLY respond with a json
module.exports = {
  findAll: function(req, res) {
    User.all().then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    User.findById(req.params.id)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  },

  //to sign up a new user
  create: function(req, res) {
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    })
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  },

  //to update user info
  update: function(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  },

  //option to delete account
  remove: function(req, res) {
    User.findById({ _id: req.params.id })
    .then(dbUser => dbUser.remove())
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  }
};
