import React, { Component } from 'react';
import ExpenseInput from '../../components/ExpenseInput/ExpenseInput';

class AddExpense extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="text-center">Add an Expense</h2>
            <ExpenseInput />
          </div>
        </div>
      </div>
    );
  }
}
export default AddExpense;
