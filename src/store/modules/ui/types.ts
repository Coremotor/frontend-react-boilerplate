export type TThemeState = {
  theme: string
  activeTab: string
  mobileDevise: boolean
  showMenu: boolean
}

export enum EnumTabs {
  main = 'main',
  theme = 'theme',
  language = 'language',
  pageThree = 'pageThree',
}
