import React, {Component} from "react";

class Sum extends Component{
    constructor(props){
        super(props)
        this.state ={
            number1:0,
            number2:0,
            sum: null
        }
    }
    updateNumber1(value){
        this.setState({number1:value});
    }
    updateNumber2(value){
        this.setState({number2:value});
    }
    summation(number1,number2){
        this.setState({sum:parseInt(number1)+parseInt(number2)});
    }
    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange ={e => this.updateNumber1(e.target.value)}></input>
                <input className="inputLine" onChange ={e => this.updateNumber2(e.target.value)}></input>
                <button className="confirmationButton" onClick = { () => this.summation(this.state.number1,this.state.number2)}>Check</button>
                <span className="resultsBox"> Sum: {this.state.sum}</span>
            </div>

        )
    }
}

export default Sum;