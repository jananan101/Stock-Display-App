import React from 'react';

class Stock extends React.Component{
    constructor(props){ {/*new object and its state*/}
        super(props);
        this.state = {
            stockChartX: [],
            stockChartY: []
        }
    }


checkMount(){
    this.fetchStock();
}

fetchStock(){
    const API_KEY = ''; {/*alpha vantage stock data */}
    let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=compact&apikey=${API_KEY}`;

    fetch(API_CALL)
        .then(
            function(response){
                return response.json();
        }
        )
        .then(
            function(data){
                console.log(data)
            }
        )
}

    render(){
        return(
            <div>
                <h1>Market</h1>
            </div>
        )
    }
}

export default Stock;