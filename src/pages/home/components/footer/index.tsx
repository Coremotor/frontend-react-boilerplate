import React, { ChangeEvent, FC } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { DefaultThemeProps } from 'styles/types'
import { setTheme } from 'store/modules/theme/reducer'
import { useDispatch } from 'react-redux'

export const Footer: FC = () => {
  const dispatch = useDispatch()
  const themeSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.checked) {
      dispatch(setTheme('light'))
    } else {
      dispatch(setTheme('dark'))
    }
  }

  return (
    <Container>
      <ThemeSwitcher>
        <label htmlFor="theme">Light mode</label>
        <input id="theme" type="checkbox" onChange={themeSwitch} />
      </ThemeSwitcher>

      <span>{format(Date.now(), 'yyyy')}</span>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props: DefaultThemeProps) => props.theme.background.primary};
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  border-top: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  padding: 20px;
`

const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;

  & label {
    cursor: pointer;
    margin-right: 10px;
  }

  & input {
    cursor: pointer;
  }
`
