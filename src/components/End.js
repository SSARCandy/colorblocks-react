import React, { Component } from 'react';
import {INIT_TIME, COMBO_THRES} from '../constants';
import '../style/End.css';

export default class End extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {handleRestart, answered, correct} = this.props;

    return (
      <div className='end-wrap'>
        <h2 style={{textAlign: 'center'}}>Welcome to ColorBlocks</h2>
        <p>
          Answer the color that didn't appear in Questions.
        </p>
        <p>
          You have {INIT_TIME} sec to answer these questions.
        </p>
        <p>
          You will get bonus time if you get {COMBO_THRES} combo corrects.
        </p>
        <p>
          Use arrow keys or click button to answer.
        </p>
        { answered > 0 && (
          <table className='statistic'>
            <tbody>
              <tr>
                <td>Total Questions:</td>
                <td>{answered}</td>
              </tr>
              <tr>
                <td>Correct:</td>
                <td>{correct}</td>
              </tr>
              <tr>
                <td>Wrong:</td>
                <td>{answered - correct}</td>
              </tr>
              <tr>
                <td>Accuracy:</td>
                <td>{Math.round((correct / answered) * 100)}%</td>
              </tr>
            </tbody>
          </table>
        )}
        <div className='restart-wrap'>
          <button onClick={handleRestart} className='btn-restart'>{answered > 0 ? 'RESTART' : 'START'}</button>
        </div>
      </div>
    );
  }
}