import React from 'react';
import ChildCounter from "./ChildCounter";
import { observer } from "mobx-react-lite";
import { useSelector } from "react-redux";
import { useActions } from "./hooks/useActions";

const ParentCounter = () => {

  const parentCount = useSelector(state => state.counters.parentCount)

  const { incrementParentCount } = useActions()

  console.log('%cRedux - Parent render', 'color: blue')

  return (
    <div className={'parent'}>
      <h3>Redux</h3>
      <h4>Parent Component</h4>
      <span>ParentCount: {parentCount}</span>
      <button onClick={incrementParentCount}>+</button>
      <ChildCounter/>
    </div>
  );
};

export default observer(ParentCounter);