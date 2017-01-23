import React, { Component } from 'react';
import { KEY_COLOR_MAP, COLOR_MAP } from '../constants';
import '../style/Question.css';


export default class Question extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {color} = this.props;
    const style = {
      color: COLOR_MAP[color[0]],
      background: COLOR_MAP[color[1]],
      textAlign: 'center',
      padding: '10px'
    };

    return (
      <div className='question-wrap'>
        <div style={style}>
          {COLOR_MAP[color[2]].toUpperCase()}
        </div>
      </div>
    );
  }
}