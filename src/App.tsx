import React, { useEffect } from 'react'
import { RootRoute } from 'routes'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import darkTheme from 'styles/darkTheme'
import lightTheme from 'styles/lightTheme'
import { useDispatch, useSelector } from 'react-redux'
import { getTheme } from 'store/modules/ui/selectors'
import { GlobalStyles } from 'styles/global'
import { setIsMobileDevise, setShowMenu } from 'store/modules/ui/reducer'
import { BREAKPOINTS } from 'styles/breakpoints'
import { ToastContainer } from 'react-toastify'

export function App() {
  const dispatch = useDispatch()
  const themes: { [key: string]: DefaultTheme } = {
    light: lightTheme,
    dark: darkTheme,
  }

  const theme = useSelector(getTheme)

  const onResize = () => {
    if (window.innerWidth <= BREAKPOINTS.tablet) {
      dispatch(setIsMobileDevise(true))
    } else {
      dispatch(setIsMobileDevise(false))
      dispatch(setShowMenu(false))
    }
  }

  useEffect(() => {
    if (window.innerWidth <= BREAKPOINTS.tablet) {
      dispatch(setIsMobileDevise(true))
    } else {
      dispatch(setIsMobileDevise(false))
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <RootRoute />
      <ToastContainer />
    </ThemeProvider>
  )
}
