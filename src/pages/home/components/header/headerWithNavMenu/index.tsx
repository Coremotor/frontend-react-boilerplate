import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { Routes } from 'routes/routes'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { DefaultThemeProps } from 'styles/types'
import { logout } from 'store/modules/auth/actions'
import { useTranslation } from 'react-i18next'
import { getIsMobileDevise, getShowMenu } from 'store/modules/ui/selectors'
import { ReactComponent as BurgerIcon } from 'assets/hamburger.svg'
import { setShowMenu } from 'store/modules/ui/reducer'
import { MobileNavigation, Navigation } from 'pages/home/components/navigation/topNavMenu'

export const Header: FC = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const history = useHistory()
  const isMobile = useSelector(getIsMobileDevise)
  const showMenu = useSelector(getShowMenu)

  const onLogout = async () => {
    await dispatch(logout())
    history.push(Routes.auth)
  }

  const showNavMenu = () => dispatch(setShowMenu(true))

  return (
    <Container>
      {isMobile && <StyledBurgerIcon onClick={showNavMenu} />}
      <Text>{t('header')}</Text>
      {isMobile ? showMenu && <MobileNavigation /> : <Navigation />}
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
  margin-right: 40px;
`

const Logout = styled.div`
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  cursor: pointer;
  margin-left: auto;
`

const StyledBurgerIcon = styled(BurgerIcon)`
  width: 24px;
  height: 24px;
  & path {
    stroke: ${(props: DefaultThemeProps) => props.theme.text.primary};
  }
  cursor: pointer;
  margin-right: 20px;
`
