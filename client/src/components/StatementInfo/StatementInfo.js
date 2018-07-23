import React from 'react';
import { Component } from 'react';
import CustomSelect from '../CustomSelect';

class StatementInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'select' ? target.selected : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
                  <CustomSelect
                    name="id"
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
                        <th scope="col">Bill Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Paid From</th>
                        <th scope="col">Auto Pay</th>
                        <th scope="col">File Upload</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Visa/Capital One</td>
                        <td>100.50</td>
                        <td>Suntrust Checking</td>
                        <td>Yes</td>
                        <td>No</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Discover</td>
                        <td>59.00</td>
                        <td>Suntrust Checking</td>
                        <td>Yes</td>
                        <td>No</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Amex</td>
                        <td>279.00</td>
                        <td>Delta Credit Union</td>
                        <td>No</td>
                        <td>Yes</td>
                      </tr>
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
