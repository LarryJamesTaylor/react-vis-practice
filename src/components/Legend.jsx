import React, {Component} from 'react';
import './Legend.css';

class Legend extends Component {
  render() {
    return (
      <div className='flex'>
        <div className='pair'>
          <div className='orange'></div>
          <p className='keys'>Average Score</p>
        </div>
        <div className='pair'>
          <div className='first'></div>
          <p className='keys'>First Attempt</p>
        </div>
        <div className='pair'>
          <div className='second'></div>
          <p className='keys'>Second Attempt</p>
        </div>
      </div>
    );
  }
}

export default Legend;
