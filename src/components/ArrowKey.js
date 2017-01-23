import React, { Component } from 'react';
import '../style/ArrowKey.css';

export default class ArrowKey extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {ans} = this.props;

    return (
      <div className='arrow-wrap'>
        <button className='btn-up'>&#8593;</button>
        <button className='btn-left'>&#8592;</button>
        <button className='btn-down'>&#8595;</button>
        <button className='btn-right'>&#8594;</button>
      </div>
    );
  }
}