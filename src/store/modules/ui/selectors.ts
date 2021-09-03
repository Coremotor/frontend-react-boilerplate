import { TState } from 'store/store'

export const getTheme = (state: TState) => state.ui.theme
export const getActiveTab = (state: TState) => state.ui.activeTab
export const getShowNavMenu = (state: TState) => state.ui.showNavMenu
