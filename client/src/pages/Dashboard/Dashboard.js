import React, { Component } from 'react';
import Chart from '../../components/Chart/Chart';
import './Dashboard.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
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
            data: [30, 5, 15, 20, 15, 5, 5, 5],
            backgroundColor: [
              'rgb(63,191,191)',
              'rgb(191,127,63)',
              'rgb(63,63,191)',
              'rgb(63,191,63)',
              'rgb(191,63,191)',
              'rgb(191,191,63)',
              'rgb(191,63,63)',
              'rgb(127,63,191)'
            ]
          }
        ]
      }
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="text-center">Expense Totals</h2>
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
    );
  }
}

export default Dashboard;
