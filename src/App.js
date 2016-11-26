import React, { Component } from 'react';
import hand from './strong-hand.svg';
import './App.css';
import Chart from "react-chartjs"

    // var options = {
    //     scales: {
    //         xAxes: [{
    //             type: 'linear',
    //             position: 'bottom'
    //         }]
    //     }
    // }

    var data = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

var options = {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            }
    }


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={hand} className="App-logo" alt="logo" />
          <h2>Team Skills</h2>
        </div>
        <p className="App-intro">
         Imagine that you are a manager of a globally distributed team of 15 people. It's amlost impossible to keep track of who is good with what technology, especially as employees come and go quite often. We've built a solution that analyzes data from multiple data sources and assess people's skill levels in yours defined areas. This enables you to see the experts in you teams for each field. Now imagine you have a new project that you assume will need 2 people that are really good with Excel and one person that has exceptional communications and reporting skills to present the results of data analysis. You just put the values in in this special screen and it automatically returns you who are the best available team members right now, that could work on the project. This not only takes a huge pain from keeping track of the masters in your team but also actually raises the success factor of projects by assembling the right team.
        </p>


      <Chart data={data} options={options} width="600" height="250"/>
  
      </div>
    );
  }
}

export default App;
