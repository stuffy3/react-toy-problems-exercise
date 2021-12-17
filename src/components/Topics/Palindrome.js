import React, {Component} from "react";

export default class Palindrome extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    onChangeHandler(value) {
        this.setState({userInput: value})
    }

    isPalindrome(userInput) {
        let forwards = userInput
        let backwards = userInput
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('')

        if (forwards === backwards) {
            this.setState({palindrome: 'true'});
        } else {
            this.setState({palindrome: "false"})
        }
    }

    render() {
        return(
            <div className="puzzleBox palindromePB">
                <h4>Palindrom</h4>
                <input className="inputLine" onChange={ (e) => this.onChangeHandler(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput)}>Submit</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>

        )
    }
}
