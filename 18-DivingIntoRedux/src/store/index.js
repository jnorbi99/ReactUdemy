import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './counter'
import AuthReducer from './auth'

const store = configureStore({
  reducer: { counter: CounterReducer, login: AuthReducer },
})

export default store
