import React, { Component } from 'react';
import './App.css';
// import Header from './header';
// import GuessSection from './guess-section';
// import GuessCount  from './guess-count';
// import GuessList from './guess-list';

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentNumber: Math.floor(Math.random()*100),
      currentGuess: '',
      recentGuesses: [],//shows the numbers
      history: [],//total number of guesses?
      currentFeedback: 'Make your guess!',
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

    onNewGame(event) {
        event.preventDefault();
        if (this.props.onNewGame) {
            this.props.onNewGame();
        }
    }

    onInfo(event) {
        event.preventDefault();
        if (this.props.onInfo) {
            this.props.onInfo();
        }
    }
    onClose(event) {
    event.preventDefault();
    if (this.props.onClose) {
        this.props.onClose();
    }
}

  render() {
    return (
      <div className="App">
        <header>
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.onInfo(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.onNewGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
          <h1>HOT or COLD</h1>
        </header>


            <div className="game">
              <div className='feedback'>
                {this.state.currentFeedback}
              </div>
              <form onSubmit={this.handleSubmit}>
                <label>
                 <input type="text"
                   placeholder="Your guess here."
                   className="userGuess text"
                   value={this.state.currentGuess}
                   onChange={this.updateCurrentGuess}
                   onSubmit={this.handleSubmit}/>
               </label>
               <input type="submit"
                 value="Submit"
                 className="guessButton button"/>
            </form>
            <div className="count">
              Guess #{this.state.numberOfGuesses}
            </div>
            <div className="guessList guessBox clearfix">
              <li>{this.state.history}</li>
            </div>
          </div>
          <div className="overlay" id="modal">

        <div className="content">
              <h3>What do I do?</h3>
              <div>
                  <p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
                  <ul>
                      <li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
                      <li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
                      <li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
                  </ul>
                  <p>So, Are you ready?</p>
                  <a className="close" href="#" onClick={e => this.onClose(e)}>Got It!</a>
              </div>
          </div>
      </div>


      </div>
    );
  }
}

export default App;
