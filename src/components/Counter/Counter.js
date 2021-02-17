import React from 'react';
import Controls from './Controls';
import Value from './Value';
import Step from './Step';
import './Counter.css';

function Counter() {
  return (
    <div className="Counter">
      <Step />

      <Value />

      <Controls />
    </div>
  );
}

export default Counter;
