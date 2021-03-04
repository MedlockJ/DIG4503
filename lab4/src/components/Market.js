import React, {Component} from 'react';
import MarketItem from './MarketItem';
import MarketItem2 from './MarketItem2';

class Market extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 0
        };
    };

    render(){
        const total = this.state.count + this.state.count2
        return(
            <div class="App-body">
                <MarketItem count = {this.state.count}/>
                <button class = "App-button" onClick= {()=>this.setState({count: this.state.count +1})}>Add Market Item</button>
            
                <MarketItem2 count = {this.state.count2}/>
                <button class="App-button" onClick= {()=>this.setState({count2: this.state.count2 +1})}>Add Market Item</button>
                <p>Total : {total}</p>
            </div>
        )
    }
}

export default Market;