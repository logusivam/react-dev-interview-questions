import React, { useState } from 'react';

function Counter() {
  // Initialize state at 0
  const [count, setCount] = useState(0);

  // Best Practice: Use the updater function (prev => prev + 1)
  const handleIncrease = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Current Count: {count}</h2>
      
      {/* Attach handlers to onClick events */}
      <button onClick={handleIncrease} style={{ marginRight: '10px' }}>
        Increase
      </button>
      
      <button onClick={handleDecrease}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;