import React, { Component } from 'react';
import '../style/End.css';

export default class End extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {answered, correct, scores} = this.props;

    return (
      <div className='end-wrap'>
        <table>
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
              <td>{Math.round((correct / answered)*100)}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}