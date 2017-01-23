import React, { Component } from 'react';
import '../style/ArrowKey.css';

export default class ArrowKey extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {handleKeyDown} = this.props;

    return (
      <div className='arrow-wrap'>
        <button onClick={() => {handleKeyDown(38)}} className='btn-up'>&#8593;</button>
        <button onClick={() => {handleKeyDown(37)}} className='btn-left'>&#8592;</button>
        <button onClick={() => {handleKeyDown(40)}} className='btn-down'>&#8595;</button>
        <button onClick={() => {handleKeyDown(39)}} className='btn-right'>&#8594;</button>
      </div>
    );
  }
}