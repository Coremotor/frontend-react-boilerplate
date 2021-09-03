import React, { ChangeEvent, FC, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab, setTheme } from 'store/modules/ui/reducer'
import { EnumTabs } from 'store/modules/ui/types'
import { DefaultThemeProps, themeNames } from 'styles/types'
import { useTranslation } from 'react-i18next'
import { getTheme } from 'store/modules/ui/selectors'

export const PageSwitchTheme: FC /*<Props>*/ = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const theme = useSelector(getTheme)

  const themeSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.checked) {
      dispatch(setTheme(themeNames.light))
    } else {
      dispatch(setTheme(themeNames.dark))
    }
  }

  useEffect(() => {
    dispatch(setActiveTab(EnumTabs.theme))
  }, [])
  return (
    <Container>
      <ThemeSwitcher>
        <Label htmlFor="theme">{t('lightTheme')}</Label>
        <input id="theme" type="checkbox" onChange={themeSwitch} checked={theme === themeNames.light} />
      </ThemeSwitcher>
    </Container>
  )
}

const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Label = styled.label`
  cursor: pointer;
  margin-right: 10px;
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
`

const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  & input {
    cursor: pointer;
  }
`
