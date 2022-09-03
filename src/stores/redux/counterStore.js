import { configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counters',
  initialState: {
    parentCount: 0,
    childCount: 0
  },
  reducers: {
    incrementParentCount: state => {
      state.parentCount++
    },
    incrementChildCount: state => {
      state.childCount++
    }
  }
})

export const counterStore = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
})