import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TAuthState } from 'store/modules/auth/types'

const initialState: TAuthState = { isLoading: false }

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoading(state: TAuthState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
  },
})

export const { setIsLoading } = userSlice.actions

export default userSlice.reducer
