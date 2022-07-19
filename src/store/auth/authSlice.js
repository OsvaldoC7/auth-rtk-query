import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      console.log(action.payload)
      const accessToken = action.payload.access_token
      const user = action.payload.user
      state.user = user
      state.token = accessToken
    },
    logOut: (state, action) => {
      state.user = null
      state.token = null
    }
  }
})

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
