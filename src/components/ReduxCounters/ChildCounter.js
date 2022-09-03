import React from 'react';
import { observer } from "mobx-react-lite";
import { useSelector } from "react-redux";
import { useActions } from "./hooks/useActions";

const ChildCounter = () => {
  const childCount = useSelector(state => state.counters.childCount)

  const { incrementChildCount } = useActions()

  console.log('%cRedux - Child render\n', 'color: blue')

  return (
    <div className={'child'}>
      <h4>Child Component</h4>
      <span>ChildCount: {childCount}</span>
      <button onClick={incrementChildCount}>+</button>
    </div>
  );
};

export default observer(ChildCounter);