import React, {Component} from "react";

export default class FilterObject extends Component {
    constructor() {
        super()
    
        this.state = {
            unfilteredArray: [
                {
                    name: 'Tanner',
                    age: 26,
                    nickname: 'Stuffy'
                },
                {
                    name: 'Boris',
                    occupation: 'Producer',
                    mask: "True"
                },
                {
                    name: 'Extra',
                    type: "Gum",
                }
            
            ],
            userInput: '',
            filteredArray: []
        }
    }
        onChangeHandler(val) {
            this.setState({userInput: val})
        }

        filterArray(prop) {
            let arr = this.state.unfilteredArray;
            let filteredArr = []
            
            for(let i = 0; i < arr.length; i++) {
                if(arr[i].hasOwnProperty(prop)) {
                    filteredArr.push(arr[i])
                }
            }

            this.setState({ filteredArray: filteredArr})
        }



    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.onChangeHandler(e.target.value)}></input>
                <button className="confirmationBox"onClick={() => this.filterArray(this.state.userInput)}>Filter</button>
                <span className="resultBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}
