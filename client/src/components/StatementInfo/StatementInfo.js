import React from 'react';
import { Component } from 'react';
import API from '../../utils/API';

const StatementSelect = props => {
  return (
    <div className="form-group">
      <label>Expense Category</label>
      <select className="custom-select" {...props}>
        <option value="all">View All</option>
        {props.data.map(function(expense) {
          return <option key = {expense.id} value={expense.id}>{expense.category}</option>
        })}
      </select>
    </div>
  );
};

class StatementInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'all',
      statements: [],
      activeStatements: [],
      expenses: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    API.getStatements()
      .then(res => {
        this.setState({
          statements: res.data,
          activeStatements: res.data
        })
      })
    API.getExpenses()
      .then(res => {
        if (res.data.length === 0) {
          API.createBulkExpenses()
            //here we run a recursion by running the getExpense method again, but it will go to the else
            //part because res.data.length is no longer 0
            .then(res => this.setState({expenses: res.data}))
            .catch(err => res.send(err))
        } else {
          this.setState({
            expenses: res.data
          });
        }
      })
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (value === "all") {
      this.setState({
        [name]: value,
        activeStatements: this.state.statements
      });
    } else {
      const activeStatements = this.state.statements.filter(statement => parseInt(statement.ExpenseId, 10) === parseInt(value, 10));
      this.setState({
        [name]: value,
        activeStatements: activeStatements
      });
    }
  }


  render() {
    const { isAuthenticated } = this.props.auth;
    return isAuthenticated() ? (
      <div className="container">
        <br />
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <h2 className="text-center">View Statements</h2>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <div className="card">
              <div className="card-body" id="statement-select">
                <form onSubmit={this.handleSubmit}>
                  <StatementSelect
                    name="id"
                    data={this.state.expenses}
                    value={this.state.id}
                    onChange={this.handleChange}
                  />
                  <input
                    className="btn btn-warning"
                    type="submit"
                    value="Submit"
                    onClick={this.cancelCourse}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <div className="card">
              <div className="card-body" id="statement-table">
                <div className="table-repsponsive-sm">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Statement Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Paid From</th>
                        <th scope="col">Auto Pay</th>
                        <th scope="col">File Upload</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.activeStatements.map(function(statement, index) {
                        return (
                          <tr key={statement.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{statement.description}</td>
                            <td>{statement.amount}</td>
                            <td>{statement.moneySource}</td>
                            <td>{statement.autoPay ? "Yes" : "No"}</td>
                            <td>{statement.photo ? "Yes" : "No"}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default StatementInfo;
