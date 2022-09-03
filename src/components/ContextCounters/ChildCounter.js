import React, { useContext } from 'react';
import { CountersContext } from "./ParentCounter";

const ChildCounter = () => {
  const { childCount, setChildCount } = useContext(CountersContext)

  const incrementChildCount = () => setChildCount(value => value + 1)

  console.log('%cContext - Child render\n', 'color: green')

  return (
    <div className={'child'}>
      <h4>Child Component</h4>
      <span>ChildCount: {childCount}</span>
      <button onClick={incrementChildCount}>+</button>
    </div>
  );
};

export default React.memo(ChildCounter);