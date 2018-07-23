import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart/Chart';
import API from '../../utils/API';
import './Dashboard.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }

  getChartData() {
    API.getExpense()
      .then(
        res => {
          let amount = res.data;
          let i = 0;
          const amountArr = [];
          for (i = 0; i < amount.length; i++) {
            amountArr.push(amount[i].avgAmount);
          }
          const amountIntArr = amountArr.map(x => Number.parseInt(x, 10));

          this.setState({
            chartData: {
              labels: [
                'Rent/Mortgage',
                'Utilities',
                'Car/Transportation',
                'Food/Dining',
                'Credit Cards',
                'Loans',
                'Medical/Health',
                'Other'
              ],
              datasets: [
                {
                  label: 'Total Expense by Percentage',
                  data: amountIntArr,
                  backgroundColor: [
                    'rgb(17,90,86)',
                    'rgb(75,196,210)',
                    'rgb(235,221,25)',
                    'rgb(44,207,44)',
                    'rgb(235,141,19)',
                    'rgb(30,113,173)',
                    'rgb(152,229,46)',
                    'rgb(45,102,9)'
                  ]
                }
              ]
            }
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getChartData();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return isAuthenticated() ? (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <h2 className="text-center" id="totals">
              Expense Totals
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Chart chartData={this.state.chartData} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-4 offset-sm-4">
            <div className="card text-center" id="update">
              <h3>
                <Link to="/addexpense" id="update-text">
                  Update Expenses
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-4 offset-sm-4">
            <div className="card text-center" id="rent">
              <h5>Rent/Mortgage</h5>
            </div>
            <div className="card text-center" id="util">
              <h5>Utilities</h5>
            </div>
            <div className="card text-center" id="car">
              <h5>CarTransportation</h5>
            </div>
            <div className="card text-center" id="food">
              <h5>Food/Dining</h5>
            </div>
            <div className="card text-center" id="credit">
              <h5>Credit Cards</h5>
            </div>
            <div className="card text-center" id="loan">
              <h5>Loans</h5>
            </div>
            <div className="card text-center" id="medical">
              <h5>Medical/Health</h5>
            </div>
            <div className="card text-center" id="other">
              <h5>Other</h5>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default Dashboard;
