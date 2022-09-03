import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { counterSlice } from "../../../stores/redux/counterStore";

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(counterSlice.actions, dispatch)
}