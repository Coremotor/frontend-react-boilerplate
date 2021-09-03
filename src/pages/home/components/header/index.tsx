import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { Routes } from 'routes/routes'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { DefaultThemeProps } from 'styles/types'
import { logout } from 'store/modules/auth/actions'
import { useTranslation } from 'react-i18next'
import { BurgerButton } from 'components/burgerButton'
import { getShowNavMenu } from 'store/modules/ui/selectors'

export const Header: FC = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const history = useHistory()
  const showMenu = useSelector(getShowNavMenu)

  const onLogout = async () => {
    await dispatch(logout())
    history.push(Routes.auth)
  }

  return (
    <Container>
      {!showMenu && <BurgerButton />}
      <Text>{t('header')}</Text>
      <Logout onClick={onLogout}>{t('logout')}</Logout>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  align-items: center;
  background-color: ${(props: DefaultThemeProps) => props.theme.background.primary};
  border-bottom: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  padding: 20px;
`

const Text = styled.span`
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
`

const Logout = styled.div`
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  cursor: pointer;
  margin-left: auto;
`
