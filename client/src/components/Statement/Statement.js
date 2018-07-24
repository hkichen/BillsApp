import React from 'react';
import { Component } from 'react';
import CustomSelect from '../CustomSelect';
import Checkbox from '../CheckBox';
import API from '../../utils/API';
import './Statement.css';

class Statement extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    API.addStatements()
      .then(res => {})
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
                    className="form-control"
                    name="photo"
                    id="statementUpload"
                    type="file"
                    accept="image/*;capture=camera"
                    value={this.state.photo}
                    onChange={this.handleChange}
                  />
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
