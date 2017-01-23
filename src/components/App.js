import React, { Component } from 'react';
import StatusPanel from './StatusPanel';
import Question from './Question';
import ArrowKey from './ArrowKey';
import End from './End';
import { KEY_COLOR_MAP, COLOR_MAP, INIT_TIME, COMBO_THRES, COMBO_BONUS } from '../constants';
import { shuffle } from '../utils';
import '../style/App.css';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: false,
      currentState: '',
      combo: 0,
      answered: 0,
      correct: 0,
      time: INIT_TIME,
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
    const { answered, correct, combo, time } = this.state;
    let nextState = {
      answered: answered + 1
    };
    if (ans === this.state.questionColor[3]) {
      if ((combo + 1) % COMBO_THRES === 0) {
        nextState.time = Math.min(time + COMBO_BONUS, INIT_TIME);
      }
      nextState = Object.assign(nextState, {
        correct: correct + 1,
        currentState: 'correct',
        combo: combo + 1,
      });
    } else {
      nextState = Object.assign(nextState, {
        answered: answered + 1,
        currentState: 'wrong',
        combo: 0
      });
    }
    this.setState(nextState);
  }

  handleKeyDown = (keyCode) => {
    if (this.state.currentState) return;
    if (!~[37, 38, 39, 40].indexOf(keyCode)) return;

    this.answerQuestion(KEY_COLOR_MAP[keyCode]);
    setTimeout(() => {
      this.setState({
        currentState: ''
      });
      this.generateQuestion();
    }, 500);
  }

  handleRestart = () => {
    this.setState({
      start: true,
      answered: 0,
      correct: 0,
      currentState: '',
      combo: 0,
      time: INIT_TIME,
      questionColor: [0, 1, 2, 3]
    });

    this.interval = setInterval(this.tick, 1000);
  }

  render() {
    const {correct, answered, time, combo, questionColor, currentState, start} = this.state;
    const bonusTime = (combo > 0) && (combo % COMBO_THRES === 0);
    console.log(bonusTime)

    return (
      <div className='container' onKeyDown={(event) => {this.handleKeyDown(event.keyCode)}} tabIndex={0}>
        <StatusPanel time={time} score={correct} bonus={bonusTime}/>
        <Question color={questionColor} result={currentState}/>
        <ArrowKey handleKeyDown={this.handleKeyDown}/>
        {!start && (
          <div>
            <End
              handleRestart={this.handleRestart}
              answered={answered}
              correct={correct}/>
            <div className='overlay'/>
          </div>
        )}
      </div>
    );
  }
}