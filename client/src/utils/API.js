import axios from 'axios';

export default {
  // //Get all users
  // getUsers: function() {
  //   return axios.get('/api/users');
  // },
  // // Get a user by id
  // getUSer: function(id) {
  //   return axios.get('/api/users/' + id);
  // },
  // // Deletes user by id
  // deleteUser: function(id) {
  //   return axios.delete('/api/users/' + id);
  // },
  // // adds new user to the database
  // createUser: function(userData) {
  //   return axios.post('/api/users', userData);
  // },
  getMeta: function(sub) { 
    const url = '/api/users/' + sub;
    return axios({
      method: 'get',
      url: url,
      headers: {
        authorization:`Bearer ${localStorage.getItem('access_token')}`
      }
    })
  },

  updateMeta: function(data) {
    const url = '/api/users/' + data.sub;
    return axios({
      method: 'post',
      url: url,
      data: {
        lastName: data.lastName,
        firstName: data.firstName,
        monthlyIncome: data.monthlyIncome
      },
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    })
  },


  //updates new Expense to database
  createExpense: function(expenseData) {
    return axios.put('/api/expense/', expenseData);
  },
  getExpense: function(expenseData) {
    console.log('we hit getExpense');
    return axios.get('/api/expense/', expenseData);
  }
};
