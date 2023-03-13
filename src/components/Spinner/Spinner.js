import React from 'react';
import './Spinner.css';

function Spinner({ color }) {
  return (
    <div className="spinner">
      <div className="spinner-dot" style={{ backgroundColor: color }}></div>
      <div className="spinner-dot" style={{ backgroundColor: color }}></div>
      <div className="spinner-dot" style={{ backgroundColor: color }}></div>
    </div>
  );
}

export default Spinner;