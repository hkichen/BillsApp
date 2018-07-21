import axios from 'axios';
//import { privateFetch } from '../Auth/AuthUtil';

export default {
  //updates new Expense to database
  updateExpense: function(newExpense) {
    return axios.put('/api/expense/', newExpense);
  },
  getExpense: function() {
    console.log('we hit getExpense');
    return axios.get('/api/expense/');
  }
};
