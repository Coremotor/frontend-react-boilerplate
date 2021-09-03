import React from 'react'
import { Routes } from 'routes/routes'
import { EnumTabs } from 'store/modules/ui/types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DefaultThemeProps } from 'styles/types'
import { useSelector } from 'react-redux'
import { getActiveTab } from 'store/modules/ui/selectors'
import { useTranslation } from 'react-i18next'

type TLinkProps = {
  activeTab: boolean
}

export const Navigation = () => {
  const { t } = useTranslation()
  const activeTab = useSelector(getActiveTab)

  return (
    <Nav>
      <StyledNavLink to={Routes.main}>
        <LinkText activeTab={activeTab === EnumTabs.main}>{t('mainPage')}</LinkText>
      </StyledNavLink>

      <StyledNavLink to={Routes.pageOne}>
        <LinkText activeTab={activeTab === EnumTabs.theme}>{t('pageSwitchTheme')}</LinkText>
      </StyledNavLink>

      <StyledNavLink to={Routes.pageTwo}>
        <LinkText activeTab={activeTab === EnumTabs.language}>{t('pageSwitchLang')}</LinkText>
      </StyledNavLink>

      <StyledNavLink to={Routes.pageThree}>
        <LinkText activeTab={activeTab === EnumTabs.pageThree}>{t('pageThree')}</LinkText>
      </StyledNavLink>
    </Nav>
  )
}

const Nav = styled.nav`
  min-width: 200px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  padding: 20px;
`

const StyledNavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 20px;
  &:visited {
    color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  }
  &:active {
    color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  }
  &:last-child {
    margin-bottom: 0;
  }
`

const LinkText = styled.span`
  font-weight: ${(props: TLinkProps) => (props.activeTab ? 'bold' : 'normal')};
`
