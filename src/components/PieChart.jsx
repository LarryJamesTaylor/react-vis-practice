import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import './PieChart.css'

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usedData: props.usedData,
      unusedData: props.unusedData
    }
  }

  render () {
    return (
      <div className='pieZone'>
        <div>
          <h2>Used Self-Checks</h2>
          <Pie
            data={this.state.usedData}
            className='pieChart'
            options={
              {
                legend: {
                  display: true,
                  position: 'left',
                  width: '30%'
                }
              }
            }
          />
        </div>
        <div>
          <h2>Didn't Use Self-Checks</h2>
          <Pie
            data={this.state.unusedData}
            className='pieChart'
            options={
              {
                legend: {
                  display: false,
                }
              }
            }
          />
        </div>
      </div>
    )
  }
}

export default PieChart
