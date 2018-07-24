import React, { Component } from 'react';
import API from '../../utils/API';
import CustomSelect from '../CustomSelect/CustomSelect';

class ExpenseInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      userId: '',
      description: '',
      avgAmount: '',
      expenses: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    API.getExpenses()
    .then(res => {
      if (res.data.length === 0) {
        API.createBulkExpenses()
          //here we run a recursion by running the getExpense method again, but it will go to the else
          //part because res.data.length is no longer 0
          .then(res => {
            this.setState({
              id: res.data[0].id,
              description: res.data[0].description,
              avgAmount: res.data[0].avgAmount,
              expenses: res.data
            })
          })
          .catch(err => res.send(err))
      } else {
        this.setState({
          id: res.data[0].id,
          description: res.data[0].description,
          avgAmount: res.data[0].avgAmount,
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

  handleSelect(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const expense = this.state.expenses.find((expense) => parseInt(expense.id, 10) === parseInt(value, 10));
    this.setState({
      [name]: value,
      description: expense.description,
      avgAmount: expense.avgAmount
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newExpense = {
      description: this.state.description,
      avgAmount: this.state.avgAmount
    };
    API.updateExpense(newExpense, this.state.id)
      .then(res => {window.location.href="/dashboard"})
      .catch(err => console.log(err));
      
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <CustomSelect
            name="id"
            data={this.state.expenses}
            value={this.state.id}
            onChange={this.handleSelect}
          />
          <label>Description of Expense</label>
          <input
            className="form-control"
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="Bills included..."
          />
          <label>Estimated Monthly Average</label>
          <input
            className="form-control"
            name="avgAmount"
            type="text"
            value={this.state.avgAmount}
            onChange={this.handleChange}
            placeholder="00.00"
          />
          <br />
          <input
            className="btn btn-warning btn-lg"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}
export default ExpenseInput;
