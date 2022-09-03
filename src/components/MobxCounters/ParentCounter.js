import React from 'react';
import ChildCounter from "./ChildCounter";
import { counterStore } from "../../stores/mobx/counterStore";
import { observer } from "mobx-react-lite";

const ParentCounter = () => {

  const { parentCount, incrementParentCount } = counterStore

  console.log('%cMobX - Parent render', 'color: red')

  return (
    <div className={'parent'}>
      <h3>MobX</h3>
      <h4>Parent Component</h4>
      <span>ParentCount: {parentCount}</span>
      <button onClick={incrementParentCount}>+</button>
      <ChildCounter/>
    </div>
  );
};

export default observer(ParentCounter);