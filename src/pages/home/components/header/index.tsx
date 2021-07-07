import React, { FC } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Routes } from 'routes/routes'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getActiveTab } from 'store/modules/theme/selectors'
import { EnumTabs } from 'store/modules/theme/types'
import { DefaultThemeProps } from 'styles/types'
import { logout } from 'store/modules/auth/actions'

type TLinkProps = {
  activeTab: boolean
}

export const Header: FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const activeTab = useSelector(getActiveTab)

  const onLogout = async () => {
    await dispatch(logout())
    history.push(Routes.auth)
  }

  return (
    <Container>
      <Navigation>
        <StyledNavLink to={Routes.home}>
          <LinkText activeTab={activeTab === EnumTabs.main}>Main Page</LinkText>
        </StyledNavLink>

        <StyledNavLink to={Routes.pageOne}>
          <LinkText activeTab={activeTab === EnumTabs.pageOne}>Page One</LinkText>
        </StyledNavLink>

        <StyledNavLink to={Routes.pageTwo}>
          <LinkText activeTab={activeTab === EnumTabs.pageTwo}>Page Two</LinkText>
        </StyledNavLink>

        <StyledNavLink to={Routes.pageThree}>
          <LinkText activeTab={activeTab === EnumTabs.pageThree}>Page Three</LinkText>
        </StyledNavLink>
      </Navigation>

      <Logout onClick={onLogout}>Logout</Logout>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props: DefaultThemeProps) => props.theme.background.primary};
  padding: 20px;
`

const Navigation = styled.nav`
  display: flex;
`

const StyledNavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 20px;
  &:visited {
    color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  }
  &:active {
    color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  }
  &:last-child {
    margin-right: 0;
  }
`

const LinkText = styled.span`
  font-weight: ${(props: TLinkProps) => (props.activeTab ? 'bold' : 'normal')};
`

const Logout = styled.div`
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  cursor: pointer;
  margin-left: auto;
`
