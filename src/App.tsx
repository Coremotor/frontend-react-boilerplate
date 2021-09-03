import React, { useEffect, useState } from 'react'
import { RootRoute } from 'routes'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import darkTheme from 'styles/darkTheme'
import lightTheme from 'styles/lightTheme'
import { useDispatch, useSelector } from 'react-redux'
import { getTheme } from 'store/modules/ui/selectors'
import { GlobalStyles } from 'styles/global'
import { setShowNavMenu } from 'store/modules/ui/reducer'

export function App() {
  const dispatch = useDispatch()
  const themes: { [key: string]: DefaultTheme } = {
    light: lightTheme,
    dark: darkTheme,
  }
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const theme = useSelector(getTheme)
  const onResize = (e: any) => {
    setWindowWidth(e.currentTarget.innerWidth)
    if (e.currentTarget.innerWidth <= 1024) {
      dispatch(setShowNavMenu(false))
    } else {
      dispatch(setShowNavMenu(true))
    }
  }

  useEffect(() => {
    if (windowWidth <= 1024) {
      dispatch(setShowNavMenu(false))
    } else {
      dispatch(setShowNavMenu(true))
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <RootRoute />
    </ThemeProvider>
  )
}
