import React, { useMemo, useState } from 'react';
import ChildCounter from "./ChildCounter";

export const CountersContext = React.createContext(null)

const ParentCounter = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const incrementParentCount = () => setParentCount(value => value + 1)

  const contextValue = useMemo(()=>( {
    childCount,
    setChildCount,
  }), [childCount])

  console.log('%cContext - Parent render', 'color: green')

  return (
    <CountersContext.Provider value={contextValue}>
      <div className={'parent'}>
        <h3>Context</h3>
        <h4>Parent Component</h4>
        <span>ParentCount: {parentCount}</span>
        <button onClick={incrementParentCount}>+</button>
        <ChildCounter/>
      </div>
    </CountersContext.Provider>
  );
};

export default React.memo(ParentCounter);