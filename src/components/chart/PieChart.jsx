import React, { Component } from 'react'
import Chart from "react-apexcharts";
import "./chart.css";

export class PieChart extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [55, 13,],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Present', 'Absent'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      };
    }
    render() {
      return (
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="pie" width={380} />
        </div>
      );
    }
  }