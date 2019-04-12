import React from 'react';
import './ProgressBar.css';

const ProgressBar = props => {
  return (
    <div className="progress-bar">
      <span>Loading...</span>
      <progress></progress>
    </div>
  );
}

export default ProgressBar;