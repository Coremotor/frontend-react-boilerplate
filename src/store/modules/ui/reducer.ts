import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TThemeState } from 'store/modules/ui/types'

const initialState: TThemeState = { theme: 'dark', activeTab: '', showNavMenu: true }

const userSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme(state: TThemeState, action: PayloadAction<string>) {
      state.theme = action.payload
    },
    setActiveTab(state: TThemeState, action: PayloadAction<string>) {
      state.activeTab = action.payload
    },
    setShowNavMenu(state: TThemeState, action: PayloadAction<boolean>) {
      state.showNavMenu = action.payload
    },
  },
})

export const { setTheme, setActiveTab, setShowNavMenu } = userSlice.actions

export default userSlice.reducer
