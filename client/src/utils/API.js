import axios from 'axios';

export default {
  //sub is the user_id property when you get the profile info for user
  getMeta: function(sub) {
    const url = '/api/users/' + sub;
    return axios({
      method: 'get',
      url: url,
      headers: {
        authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    });
  },

  //request to update metadate to the backend server
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
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    });
  },

  //updates new Expense to database
  updateExpense: function(data, id) {
    const url = '/api/expense/' + id;
    return axios.put(url, data);
  },
  //gets expenses for pie chart
  getExpense: function() {
    return axios.get('/api/expense/');
  },
  addStatements: function(statementData) {
    return axios.post('/api/statments/', statementData);
  },
  getExpenses: function() {
    return axios.get('/api/expense/' + localStorage.getItem('userId'))
  },
  createBulkExpenses: function() {
    return axios.post('/api/expense/bulk/' + localStorage.getItem('userId'));
  }
};
