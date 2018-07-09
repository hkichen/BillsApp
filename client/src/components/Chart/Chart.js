import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  render() {
    return (
      <div className="chart-container">
        <Pie
          data={this.state.chartData}
          options={{
            legend: {
              display: false,
              position: 'bottom'
            }
          }}
        />
      </div>
    );
  }
}
export default Chart;
