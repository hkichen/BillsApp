import axios from 'axios';
//import { privateFetch } from '../Auth/AuthUtil';

export default {
  //updates new Expense to database
  updateExpense: function(data, id) {
    const url = '/api/expense/' + id;
    console.log(url);
    return axios.put(url, data);
  },
  //gets expenses for pie chart
  getExpense: function() {
    return axios.get('/api/expense/');
  },

  addStatements: function(statementData) {
    return axios.post("/api/statments/", statementData);

  }  
};
