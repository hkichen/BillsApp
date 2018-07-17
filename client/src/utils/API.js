import axios from 'axios';

export default {
  //Get all users
  getUsers: function() {
    return axios.get('/api/users');
  },
  // Get a user by id
  getUSer: function(id) {
    return axios.get('/api/users/' + id);
  },
  // Deletes user by id
  deleteUser: function(id) {
    return axios.delete('/api/users/' + id);
  },
  // adds new user to the database
  createUser: function(userData) {
    return axios.post('/api/users', userData);
  },
  //updates new Expense to database
  createExpense: function(data) {
    return axios.put('/api/expense', data);
  },
  getExpense: function(data) {
    return axios.get('api/expense', data);
  }
};
