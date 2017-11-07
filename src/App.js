import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries, LineMarkSeries} from 'react-vis';
import Legend from './components/Legend';
import PieChart from './components/PieChart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      usedData: {},
      unusedData: {}
    }
  }

  componentWillMount(){
    this.getUsedData();
    this.getUnusedData();
  }

  getUsedData(){
    this.setState({
      usedData: {
        labels: ['40%-50%', '51%-60%', '61%-70', '71%-80', '81%-90%', '91%-100%'],
        datasets: [
          {
            label: 'Used Self-Check',
            data: [
              11,
              19,
              34,
              67,
              51,
              14
            ],
            backgroundColor: [
              'red',
              'darkorange',
              'yellow',
              'magenta',
              'royalblue',
              'lime'
            ],
          }
        ]
      }
    })
  }

  getUnusedData() {
    this.setState({
      unusedData: {
        labels: ['40%-50%', '51%-60%', '61%-70', '71%-80', '81%-90%', '91%-100%'],
        datasets: [
          {
            label: 'Used Self-Check',
            data: [
              15,
              23,
              39,
              60,
              42,
              9
            ],
            backgroundColor: [
              'red',
              'darkorange',
              'yellow',
              'magenta',
              'royalblue',
              'lime'
            ]
          }
        ]
      }
    })
  }

  render() {
    const data = [
      {x: 1, y: 56},
      {x: 2, y: 85},
      {x: 3, y: 69},
      {x: 4, y: 73},
      {x: 5, y: 97},
      {x: 6, y: 90},
    ];
    const avg = [
      {x: 1, y: 85},
      {x: 2, y: 82},
      {x: 3, y: 94},
      {x: 4, y: 88},
      {x: 5, y: 91},
      {x: 6, y: 83}
    ];
    const second = [
      {x: 1, y: 72},
      {x: 2, y: 90},
      {x: 3, y: 100},
      {x: 4, y: 94},
      {x: 5, y: 98},
      {x: 6, y: 91}
    ]
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>That Data-Vis Life</h2>
        </div>
        <div className="Chart">
          <XYPlot height={400} width={500}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis tickTotal={6} tickFormat={x => `Quiz  ${x}`} tickLabelAngle={-38} />
            <YAxis tickTotal={10} tickFormat={y => `${y}%`} />
            <VerticalBarSeries data={data} color="#007A7C"/>
            <VerticalBarSeries data={second} color="#00FFFF"/>
            <LineMarkSeries data={avg} color="orange" />
          </XYPlot>
        </div>
        <Legend />
        <PieChart usedData={this.state.usedData} unusedData={this.state.unusedData}/>
      </div>
    );
  }
}

export default App;
