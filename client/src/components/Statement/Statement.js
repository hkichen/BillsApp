import React from 'react';
import { Component } from 'react';
import CustomSelect from '../CustomSelect';
import Checkbox from '../CheckBox';
import API from '../../utils/API';

class Statement extends Component {
  
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
                    name="avgAmount"
                    type="text"
                    value={this.state.avgAmount}
                    onChange={this.handleChange}
                    placeholder="00.00"
                  />
                  <label>Paid From Account</label>
                  <input
                    className="form-control"
                    name="description"
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
