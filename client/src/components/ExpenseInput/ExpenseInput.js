import React, { Component } from 'react';
import API from '../../utils/API';
import CustomSelect from '../CustomSelect/CustomSelect';

class ExpenseInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '1',
      description: '',
      avgAmount: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelCourse = this.cancelCourse.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(target);

    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit works');
    const newExpense = {
      id: this.state.id,
      description: this.state.description,
      avgAmount: this.state.avgAmount
    };
    console.log(newExpense);
    API.updateExpense({
      newExpense
    })
      .then(res => {
        console.log('updated expense');
      })
      .catch(err => console.log(err));
  }

  cancelCourse(event) {
    this.setState({
      id: '1',
      description: '',
      avgAmount: ''
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <CustomSelect
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
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
            onClick={this.cancelCourse}
          />
        </form>
      </div>
    );
  }
}
export default ExpenseInput;
