import React, { Component } from 'react';
import '../style/End.css';

export default class End extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {handleRestart, answered, correct, scores} = this.props;

    return (
      <div className='end-wrap'>
        <h2 style={{textAlign: 'center'}}>!!  Welcome to COLOR - BLOCK !!</h2>
        <ul>
          <li>Answer the color that didn't appear in Questions.</li>
          <li>You have 60 sec to answer these questions.</li>
          <li>You will get bonus time if you get 10 combo corrects.</li>
          <li>Use arrow keys or click button to answer.</li>
        </ul>
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