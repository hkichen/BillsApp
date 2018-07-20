import React, { Component } from 'react';
import ExpenseInput from '../../components/ExpenseInput/ExpenseInput';
import('./AddExpense.css');

class AddExpense extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      isAuthenticated() ?
      <div className="container">
        <div className="row">
            <div className="col-sm-12">
              <h2 className="text-center">Add an Expense</h2>
              <ExpenseInput />
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
                              <div className="card-body" id="expense-input">
                                <ExpenseInput />
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      : null
    );
  }
}
export default AddExpense;
