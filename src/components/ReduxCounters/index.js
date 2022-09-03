import React from 'react';
import ParentCounter from "./ParentCounter";
import { Provider } from "react-redux";
import { counterStore } from "../../stores/redux/counterStore";

const ReduxCounters = () =>  (
  <Provider store={counterStore}>
    <ParentCounter/>
  </Provider>
)

export default ReduxCounters;