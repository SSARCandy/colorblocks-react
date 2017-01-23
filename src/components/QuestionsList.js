import React, { Component } from 'react';
import Question from './Question';
import '../style/QuestionsList.css';


export default class QuestionsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {questions, index} = this.props;

    return (
      <div className='questionlist-container'>
        <div className='questionlist-wrap'>
          {questions.map((q, idx) => {
              const {color, state} = q;
              let focusStyle = { width: '140px' };
              if (idx === index) {
                focusStyle = Object.assign(focusStyle, {
                  filter: 'initial',
                  transform: 'scale(1.3)'
                });
              }
              if (idx - 3 === index) {
                focusStyle = {
                  width: '0px'
                }
              }

              return (
                <div key={idx} className='masked' style={focusStyle||addStyle}>
                  <Question color={color} result={state}/>
                </div>
              );
          })}
        </div>
      </div>
    );
  }
}