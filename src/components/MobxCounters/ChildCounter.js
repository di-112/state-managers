import React from 'react';
import { counterStore } from "../../stores/mobx/counterStore";
import { observer } from "mobx-react-lite";

const ChildCounter = () => {
  const { childCount, incrementChildCount } = counterStore

  console.log('%cMobX - Child render\n', 'color: red')

  return (
    <div className={'child'}>
      <h4>Child Component</h4>
      <span>ChildCount: {childCount}</span>
      <button onClick={incrementChildCount}>+</button>
    </div>
  );
};

export default observer(ChildCounter);