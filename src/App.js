import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentNumber: Math.floor(Math.random()*100),
      currentGuess: '',
      recentGuesses: [],//shows the numbers
      history: [],//total number of guesses?
      currentFeedback: '',
      feedback: ['hot', 'cold', 'super hot', 'super cold'],
      numberOfGuesses: 0
    }
    this.updateCurrentGuess = this.updateCurrentGuess.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateCurrentGuess(event) {
    this.setState({
      currentGuess: event.target.value
    });
    console.log(this.state.currentGuess);
  }

  handleSubmit(event) {
    event.preventDefault();
      if (Math.abs(this.state.currentGuess - this.state.currentNumber) < 1) {
        alert('You won!'),
        this.setState({
          currentNumber: Math.floor(Math.random()*100),
          currentGuess: '',
          recentGuesses: [],
          history: [],
          currentFeedback: '',
          feedback: ['hot', 'cold', 'super hot', 'super cold'],
          numberOfGuesses: 0
        })
      } else if (Math.abs(this.state.currentGuess - this.state.currentNumber) < 5) {
        this.setState({
          numberOfGuesses: this.state.numberOfGuesses+1,
          currentGuess: '',
          currentFeedback: 'super hot',
          history: this.state.history + this.state.currentGuess + ' '
        })
      } else if (Math.abs(this.state.currentGuess - this.state.currentNumber) < 10) {
        this.setState({
          numberOfGuesses: this.state.numberOfGuesses+1,
          currentGuess: '',
          currentFeedback: 'hot',
          history: this.state.history + this.state.currentGuess + ' '
        })
      } else if (Math.abs(this.state.currentGuess - this.state.currentNumber) < 20) {
          this.setState({
            numberOfGuesses: this.state.numberOfGuesses+1,
            currentGuess: '',
            currentFeedback: 'pretty hot',
            history: this.state.history + this.state.currentGuess + ' '
          })
      } else if (Math.abs(this.state.currentGuess - this.state.currentNumber) < 30) {
          this.setState({
            numberOfGuesses: this.state.numberOfGuesses+1,
            currentGuess: '',
            currentFeedback: 'warm',
            history: this.state.history + this.state.currentGuess + ' '
          })
      } else if (Math.abs(this.state.currentGuess - this.state.currentNumber) > 30) {
          this.setState({
            numberOfGuesses: this.state.numberOfGuesses+1,
            currentGuess: '',
            currentFeedback: 'cold',
            history: this.state.history + this.state.currentGuess + ' '
          })
        }
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

            <div>
              {/* box starts here */}
              <div>
                {this.state.currentFeedback}
              </div>
              <form onSubmit={this.handleSubmit}>
                <label>
                 <input type="text"
                   value={this.state.currentGuess}
                   onChange={this.updateCurrentGuess}
                   onSubmit={this.handleSubmit}
                 />
               </label>
               <input type="submit" value="Submit" />
            </form>
            <div>
              Guess #{this.state.numberOfGuesses}
            </div>
            <div>
              {this.state.history}
            </div>
          </div>

      </div>
    );
  }
}

export default App;
