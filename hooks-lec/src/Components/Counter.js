import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count + 1);
  const dec = () => {
    if (count <= 0) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="counter">
      <h1 onClick={dec}>-</h1>
      <h1>level {count}</h1>
      <h1 onClick={inc}>+</h1>
    </div>
  );
}

export default Counter;
