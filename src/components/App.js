import React, { Component } from 'react';
import StatusPanel from './StatusPanel';
import Question from './Question';
import ArrowKey from './ArrowKey';
import End from './End';
import { KEY_COLOR_MAP, COLOR_MAP } from '../constants';
import { shuffle } from '../utils';
import '../style/App.css';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: false,
      answered: 0,
      correct: 0,
      score: 0,
      time: 10,
      questionColor: [0, 1, 2, 3]
    };
  }

  tick = () => {
    this.setState({
      time: this.state.time - 1
    });
    if (this.state.time <= 0) {
      this.setState({
        start: false
      });
      clearInterval(this.interval);
    }
  }

  generateQuestion = () => {
    const color = shuffle([0, 1, 2, 3]);
    this.setState({
      questionColor: color
    });
  }

  answerQuestion = (ans) => {
    if (ans === this.state.questionColor[3]) {
      console.log('correct', ans);
      this.setState({
        score: this.state.score + 1,
        answered: this.state.answered + 1,
        correct: this.state.correct + 1,
      });
    } else {
      console.log('wrong');
      this.setState({
        answered: this.state.answered + 1
      });
    }
  }

  handleKeyDown = (event) => {
    console.log(event.keyCode);
    if (!~[37, 38, 39, 40].indexOf(event.keyCode)) return;

    this.answerQuestion(KEY_COLOR_MAP[event.keyCode]);
    this.generateQuestion();
  }

  handleRestart = () => {
    this.setState({
      start: true,
      answered: 0,
      correct: 0,
      score: 0,
      time: 10,
      questionColor: [0, 1, 2, 3]
    });

    this.interval = setInterval(this.tick, 1000);
  }

  render() {
    const {score, correct, answered, time, questionColor, start} = this.state;

    return (
      <div className='container' onKeyDown={this.handleKeyDown} tabIndex={0}>
        <StatusPanel time={time} score={score} />
        <Question color={questionColor} />
        <ArrowKey />
        {!start && (
          <div>
            <End score={score} answered={answered} correct={correct}/>
            <button className='btn-restart' onClick={this.handleRestart}>RESTART</button>
            <div className='overlay'/>
          </div>
        )}
      </div>
    );
  }
}