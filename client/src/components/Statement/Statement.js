import React from 'react';
import { Component } from 'react';
import CustomSelect from '../CustomSelect';
import Checkbox from '../CheckBox';
//import StatementInfo from '../StatementInfo';
// import { Result } from 'range-parser';
import API from '../../utils/API';

class Statement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '1',
      description: '',
      avgAmount: '',
      moneySource: '',
      autoPay: '',
      photo: ''
    };

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
    
    const newStatement = {
      id: this.state.id,
      description: this.state.description,
      avgAmount: this.state.avgAmount,
      moneySource: this.state.moneySource,
      autoPay: this.state.autoPay,
      photo: this.state.photo
    };
    API.addStatements(newStatement, this.state.id)
      .then(res =>{
        console.log("You added " + JSON.stringify(newStatement));
      })
      .catch(err => console.log(err));
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
                    value={this.state.id}
                    onChange={this.handleChange}
                  />
                  <label>Bill Name</label>
                  <input
                    className="form-control"
                    name="description"
                    type="text"
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder="Visa, Power Company..."
                  />
                  <label>Bill Amount</label>
                  <input
                    className="form-control"
                    name="avgAmount"
                    type="text"
                    value={this.state.avgAmount}
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
                    placeholder="Bank/Credit Card"
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
