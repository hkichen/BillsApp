import React, { Component } from 'react';
import Input from '../Input/Input';
import CustomSelect from '../CustomSelect/CustomSelect';

class ExpenseInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'select' ? target.selected : target.value;
    const name = target.name;
    console.log(target);

    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <CustomSelect
            name="category"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <label>Description of Expense</label>
          <Input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="Bills included..."
          />
          <label>Estimated Monthly Average</label>
          <Input
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
