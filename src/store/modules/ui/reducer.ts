import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TThemeState } from 'store/modules/ui/types'

const initialState: TThemeState = { theme: 'dark', activeTab: '', mobileDevise: true, showMenu: false }

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
    setIsMobileDevise(state: TThemeState, action: PayloadAction<boolean>) {
      state.mobileDevise = action.payload
    },
    setShowMenu(state: TThemeState, action: PayloadAction<boolean>) {
      state.showMenu = action.payload
    },
  },
})

export const { setTheme, setActiveTab, setIsMobileDevise, setShowMenu } = userSlice.actions

export default userSlice.reducer
