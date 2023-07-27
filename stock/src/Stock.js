import React from 'react';
import Plot from 'react-plotly.js';

// chart js imports
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement, //line
    CategoryScale, //x
    LinearScale, //y
    PointElement //dots
} from 'chart.js';

//testing chart js line graph

//plug in and use these commands
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
);

export const options = {
    responsive: true,
    plugins: {
        legends: true
    },
    scales: {
        y: {
           // min: 3,
           // max: 6
        }
    }
};


export const data = {
    labels: this.state.stockX,
    datasets: [
      {
        label: 'Dataset 1',
        data: this.state.stockY,
        borderColor: 'black',
        backgroundColor: 'white',
        pointBorderColor: 'black',
        fill: true,
      }
    ]
  }


  // end of test

class Stock extends React.Component{
    constructor(props){ {/*new object and its state*/}
        super(props);
        this.state = {
            stockX: [],
            stockY: []
        }
    }


componentDidMount(){
    this.fetchStock();
}

fetchStock(){

    const pointer = this;
    //console.log(pointer);

    const API_KEY = ''; {/*alpha vantage stock data */} {/*enter the API Key obtained from website */}
    let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=compact&apikey=${API_KEY}`;
    let stockXpointer = [];
    let stockYpointer = [];

    fetch(API_CALL)
        .then(
            function(response){
                //console.log(response)
                return response.json();
                
        }
        )
        .then(
            function(data){
                console.log(data)

                {/*loop through dataset */}

                for (var k in data['Time Series (Daily)']){
                    stockXpointer.push(k);
                    stockYpointer.push(data['Time Series (Daily)'][k]['1. open']);
                }

                //console.log(stockXpointer);
                pointer.setState({
                    stockX : stockXpointer,
                    stockY : stockYpointer
                });
            }
        )
}

    // first is for chart js and second is for plotly
    //plotly.js works successfully
    //chart.js works
    render(){
        return(
            <div>
                <h1>Market</h1>

                <div style = {
                    {
                    width: '600px',
                    height: '300px',
                    padding: '20px'
                    }
                }>
                 {/**for chart JS plotting code block */}
                <Line options={options} data={data} /> 

                {/**for plotly plotting code block */}
                {/*<Plot

                    data={[
                        {
                            x: this.state.stockX,
                            y: this.state.stockY,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: 'black'},
                        }
                    ]}
                    layout={ {width: 600, height: 600, title: 'IBM Daily Stock Price'} }
                />*/}
                </div>
            </div>
        )
    }
}

export default Stock;