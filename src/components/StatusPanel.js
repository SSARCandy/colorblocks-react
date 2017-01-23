import React, { Component } from 'react';
import '../style/StatusPanel.css';

export default class StatusPanel extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {score, time, bonus} = this.props;
    const timeStyle = {
      color: time < 10 ? 'red' : 'black'
    };
    const timebarStyle = {
      width: `${time/60*100}%`,
      background: time < 10 ? 'red' : 'green'
    };
    const timeBonusStyle = {
      opacity: bonus ? 1 : 0
    };

    console.log(bonus, timeBonusStyle)

    return (
      <div className='status-wrap'>
        <div className='time-bar' style={timebarStyle}/>
        <div className='time-bonus-toast' style={timeBonusStyle}> +10 BONUS TIME </div>
        <div className='status'>Scores: {score}</div>
        <div className='status'>Time: <span style={timeStyle}>{time}</span> s</div>
      </div>
    );
  }
}

