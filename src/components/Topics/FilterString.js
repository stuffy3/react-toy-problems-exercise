import React, {Component} from "react";

export default class FilterString extends Component {
    constructor() {
        super()

        this.state = {
            unfiltered: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filtered: []
        }
    }

    onChangeHandler(value) {
        this.setState({ userInput: value});
    };

    filterArr(userInput) {
        let arr = this.state.unfiltered;
        let filteredArr = [];

        for (let i = 0; i < arr.length; i++) {
            if(arr[i].includes(userInput)) {
                filteredArr.push(arr[i])
            }
        }
        this.setState({ filtered: filteredArr})
    }




    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Unfiltered: { JSON.stringify(this.state.unfiltered, null, 10)}</span>
                <input className="inputLine" onChange={ (e) => this.onChangeHandler(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.filterArr(this.state.userInput)}>Filter</button>
                <span>Filtered: {JSON.stringify(this.state.filtered, null, 10)}</span>
            </div>
            
        )
    }
}
