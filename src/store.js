import { configureStore } from '@reduxjs/toolkit'
import { Reducer } from './Redux/appSlice'

export const store = configureStore({
  reducer: {
    products:Reducer
  },
})