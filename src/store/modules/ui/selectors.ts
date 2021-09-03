import { TState } from 'store/store'

export const getTheme = (state: TState) => state.ui.theme
export const getActiveTab = (state: TState) => state.ui.activeTab
export const getIsMobileDevise = (state: TState) => state.ui.mobileDevise
export const getShowMenu = (state: TState) => state.ui.showMenu
