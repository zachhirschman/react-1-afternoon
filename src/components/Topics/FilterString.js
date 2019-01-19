import React, {Component} from "react";

class FilterString extends Component{
    constructor(props){
        super(props)
        this.state={
            unFilteredArray: ["cat","dog","fish","bird"],
            userInput: "",
            filteredArray: []
        }
    }
        updateUserInput(value){
            this.setState({userInput:value});
        }
        filterArray(userInput){
            var array = this.state.unFilteredArray;
            var filteredArray2 = [];
            for(let i = 0; i < array.length; i++){
                if(array[i].includes(userInput)){
                    filteredArray2.push(array[i]);
                }
            }
            this.setState({filteredArray:filteredArray2});
        }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleBox filterStringPB">Unfiltered Array: {this.state.unFilteredArray}</span>
                <input className="inputLine" onChange= {e => this.updateUserInput(e.target.value)}></input>
                <button className ="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}>Search</button>
                <span className ="resultsBox filterStringPB">Filtered Array {this.state.filteredArray}</span>
            </div>
        ) 
    }
}
export default FilterString;