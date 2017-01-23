import React, { Component } from 'react';
import { KEY_COLOR_MAP, COLOR_MAP } from '../constants';
import '../style/Question.css';


export default class Question extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {color, result, bonus} = this.props;
    const style = {
      color: COLOR_MAP[color[0]],
      background: COLOR_MAP[color[1]]
    };
    const resultStyle = result == 'correct' ? 'green' : 'red';
    const icon = result == 'correct' ? '✔' : '✘';

    return (
      <div className='question-wrap'>
        <div style={style} className='question'>
          {COLOR_MAP[color[2]].toUpperCase()}
        </div>
        {result && <span className={resultStyle}>{icon}</span>}
      </div>
    );
  }
}