import React, { Component } from 'react';
import { KEY_COLOR_MAP, COLOR_MAP, COLOR_LABEL_MAP } from '../constants';
import '../style/Question.css';


export default class Question extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {color, result, bonus} = this.props;
    const resultStyle = result == 'correct' ? 'green' : 'red';
    const icon = result == 'correct' ? '✔' : '✘';
    const style = {
      color: COLOR_MAP[color[0]],
      background: COLOR_MAP[color[1]]
    };

    return (
      <div className='question-wrap'>
        <div style={style} className='question'>
          {COLOR_LABEL_MAP[color[2]]}
        </div>
        {result && <span className={resultStyle}>{icon}</span>}
      </div>
    );
  }
}
