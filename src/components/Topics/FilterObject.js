import React, {Component} from "react";

class FilterObject extends Component{
    constructor(props){
        super(props)
        this.state ={
            unfilteredArrayObj:[
            {
                name:"Zach",
                age:20,
                job:"Web-Developer"
            },
            {
                name:"Jacob",
                age:32,
                job:"Chef"
            },
            {
                name:"Katy",
                age:17,
                job:"Waitress"
            }
        ],
            userInput:"",
            filteredArray:[]
        }
    }
    updateUserInput(value){
        this.setState({
            userInput: value
        });
    }
    filterArray(value){
        var people = this.state.unfilteredArrayObj;
        var filteredArray2 = [];

        for(var i = 0; i < people.length; i++){
            if(people[i].hasOwnProperty(value)){
                filteredArray2.push(people[i]);
            }
        }
        this.setState({filteredArray:filteredArray2});
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">unFilteredArray: {console.log(this.state.unfilteredArrayObj)}</span>
                <input className="inputLine" onChange={e => this.updateUserInput(e.target.value)}></input>
                <button className="confirmationButton" onClick={e=>this.filterArray(e.target.value)}>Filter</button>
                <span className="resultsBox filterStringRB">filteredArray: {this.state.filteredArray}</span>
            </div>
        )
    }
}

export default FilterObject;