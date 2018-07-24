const User = require('../models').User;
const axios = require('axios');

// methods for user: find, create, update, delete
//These methods ONLY respond with a json
module.exports = {
  findAll: function(req, res) {
    User.all().then(dbUsers => res.json(dbUsers))
    .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    const url = 'https://billsapp.auth0.com/api/v2/users/' + req.params.id;
    const token = process.env.AUTH_TOKEN;
    axios({
      method: 'get',
      url: url,
      headers: {
        authorization: "Bearer " + token,
        "Content-Type": 'application/json'
      }
    })
    .then((axiosResponse) => {
      res.json(axiosResponse.data)
    })
    .catch(err => res.send(err))
  },

  //to sign up a new user
  create: function(req, res) {
    User.create(req.body)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  },

  //to update user info
  update: function(req, res) {
    const url = 'https://billsapp.auth0.com/api/v2/users/' + req.params.id;
    const token = process.env.AUTH_TOKEN;
    axios({
      method: 'patch',
      url: url,
      data: {
        "user_metadata": req.body 
      },
      headers: {
        authorization: "Bearer " + token,
        "Content-Type": 'application/json'
      }
    })
    .then((axiosResponse) => {
      res.json(axiosResponse.data)
    })
    .catch(err => res.send(err));
  },


  //option to delete account
  remove: function(req, res) {
    User.findById(req.params.id)
      .then(user => {
        return user.destroy();
      }).then(() => res.send("User deleted!"))
  }
};
