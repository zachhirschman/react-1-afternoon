import React, {Component} from "react";

class Palindrome extends Component{
    constructor(props){
        super(props)
        this.state ={
            userInput:"",
            palindrome:""
        } 
    }
    updateUserInput(value){
        this.setState({userInput:value});
    }
    palindrome(userInput){
        var arrayOfStrings = userInput.split("")
        var backwards =[];
        for(let i=arrayOfStrings.length - 1; i >= 0; i--){
          backwards.push(arrayOfStrings[i]);
        }
        if(JSON.stringify(backwards)===JSON.stringify(arrayOfStrings)){
          this.setState({palindrome:"true"})
        }
        else{
          this.setState({palindrome:"false"});
        }
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={e => this.updateUserInput(e.target.value)}></input>
                <button className="confirmationButton" onClick={this.palindrome(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}
export default Palindrome;