import React, { Component } from "react";

export default class EvenAndOdd extends Component {
    constructor () {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(value) {
        this.setState({userInput: value})
    }

    pushEvenOrOdd(userInput) {
        var arr = userInput.split('');
        var even =[];
        var odd = [];

        for (var i = 0; i < arr.length; i++) {
            if( arr[i] % 2 === 0) {
                even.push( parseInt(arr[i], 10) );
            } else {
                odd.push( parseInt(arr[i], 10) );
            } //end if
        }//end for loop

        this.setState({ evenArray: even, oddArray: odd });
    }

    
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens And Odds </h4>
                <input className="inputLine" onChange ={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => {this.pushEvenOrOdd(this.state.userInput)}}>Split</button>
                <span className="resultsBox">Even: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odd: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}
