import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // Aca se define todas las varibles globales
  // del componente Counter.jsx
  value: 10,
  isLogged: 'false',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    modifyIsLogged: (state, action) => {
      state.isLogged = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer