import React, { Component } from 'react';
import ExpenseInput from '../../components/ExpenseInput/ExpenseInput';
import('./AddExpense.css');

class AddExpense extends Component {
  render() {
    return (
      <div className="bg-img">
        <div className="container">
          <br />
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <h2 className="text-center">Update Expenses</h2>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="card">
                <div className="card-body">
                  <ExpenseInput />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddExpense;
