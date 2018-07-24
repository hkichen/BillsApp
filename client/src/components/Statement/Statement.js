import React from 'react';
import { Component } from 'react';
import CustomSelect from '../CustomSelect';
import Checkbox from '../CheckBox';
import API from '../../utils/API';

class Statement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      description: '',
      amount: '',
      moneySource:'',
      autoPay: false,
      photo: '',
      expenses: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
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
          id: res.data[0].id,
          expenses: res.data
        });
      }
    })
  }  

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const expense = this.state.expenses.find((expense) => parseInt(expense.id, 10) === parseInt(this.state.id, 10));
    const data = {
      id: this.state.id,
      category: expense.category,
      description: this.state.description,
      amount: this.state.amount,
      moneySource: this.state.moneySource,
      autoPay: this.state.autoPay,
      photo: this.state.photo,
      expenses: this.state.expenses
    }
    API.createStmtWithID(this.state.id, data)
      .then(console.log("created new statement!"))
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    
    return isAuthenticated() ? (
      <div className="container">
        <br />
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <h2 className="text-center">Add A Bill Statement</h2>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <div className="card">
              <div className="card-body" id="statement-input">
                <form onSubmit={this.handleSubmit}>
                  <CustomSelect
                    name="id"
                    data={this.state.expenses}
                    value={this.state.id}
                    onChange={this.handleChange}
                  />
                  <label>Statement Description</label>
                  <input
                    className="form-control"
                    name="description"
                    type="text"
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder="due on the 20th..."
                  />
                  <label>Statement Amount</label>
                  <input
                    className="form-control"
                    name="amount"
                    type="number"
                    value={this.state.amount}
                    onChange={this.handleChange}
                    placeholder="00.00"
                  />
                  <label>Paid From Account</label>
                  <input
                    className="form-control"
                    name="moneySource"
                    type="text"
                    value={this.state.moneySource}
                    onChange={this.handleChange}
                    placeholder="Suntrusk checking account"
                  />
                  <Checkbox
                    id="auto-pay"
                    type="checkbox"
                    value={this.state.autoPay}
                    onChange={this.handleChange}
                  />
                  <br />
                  <label>Upload Image or File</label>
                  <input
                    className="form-control"
                    name="photo"
                    id="statementUpload"
                    type="file"
                    accept="image/*;capture=camera"
                    value={this.state.photo}
                    onChange={this.handleChange}
                  />
                  <br />
                  <br />
                  <input
                    className="btn btn-warning btn-lg"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default Statement;
