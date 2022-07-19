import { createSlice } from '@reduxjs/toolkit'

const loginInitialState = { isLoggedIn: false }

const loginSlice = createSlice({
  name: 'login',
  initialState: loginInitialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true
    },
    logout(state) {
      state.isLoggedIn = false
    },
  },
})

export const loginActions = loginSlice.actions
export default loginSlice.reducer
