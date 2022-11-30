import { createSlice } from '@reduxjs/toolkit'

// A slice comprises of State, Reducers, Actions
// it is all defined in one place
// different to normal redux

export const counterSlice = createSlice({
  name: 'counter',  // name of our slice
  initialState : {
    count:0
  },
  reducers: {
    // each of the below are cases in the reducer
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// here we are exporting all our actions to be used elsewhere.  They are destructured from counterSlice.actions
// createSlice looks at all the functions that are defined in the reducers field and for every case generates an action creator that uses the name of the reducer as the action type itself.

export default counterSlice.reducer