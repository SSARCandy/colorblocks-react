import React, { Component } from 'react';
import '../style/StatusPanel.css';

export default class StatusPanel extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {score, time} = this.props;
    const style = {
      color: time < 10 ? 'red' : 'black'
    };

    return (
      <div className='status-wrap'>
        <div className='status'>Time: <span style={style}>{time}</span> s</div>
        <div className='status'>Scores: {score}</div>
      </div>
    );
  }
}

