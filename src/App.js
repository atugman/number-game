import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentGuess: '',
      recentGuesses: [],//shows the numbers
      history: [],//total number of guesses?
      currentFeedback: '',
      feedback: ['hot', 'cold', 'super hot', 'super cold']
    }
    this.updateCurrentGuess = this.updateCurrentGuess.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateCurrentGuess(event) {
    this.setState({
      currentGuess: event.target.value
    });
  }

  handleSubmit(event) {
    const input = event.target.value
    console.log(input);
    this.setState({
      history: this.state.history + input
    })
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
      </div>
    );
  }
}

export default App;
