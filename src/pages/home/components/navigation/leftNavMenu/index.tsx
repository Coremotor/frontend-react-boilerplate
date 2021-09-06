import React from 'react'
import { Routes } from 'routes/routes'
import { EnumTabs } from 'store/modules/ui/types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DefaultThemeProps } from 'styles/types'
import { useDispatch, useSelector } from 'react-redux'
import { getActiveTab, getIsMobileDevise } from 'store/modules/ui/selectors'
import { useTranslation } from 'react-i18next'
import { ReactComponent as CloseIcon } from 'assets/close.svg'
import { setShowMenu } from 'store/modules/ui/reducer'
import { zIndexLevels } from 'styles/zIndexLevels'

type TLinkProps = {
  activeTab: boolean
}

const NavList = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const activeTab = useSelector(getActiveTab)
  const isMobile = useSelector(getIsMobileDevise)

  const onLinkClick = () => {
    if (isMobile) {
      dispatch(setShowMenu(false))
    } else return
  }

  return (
    <>
      <StyledNavLink to={Routes.main} onClick={onLinkClick}>
        <LinkText activeTab={activeTab === EnumTabs.main}>{t('mainPage')}</LinkText>
      </StyledNavLink>

      <StyledNavLink to={Routes.pageOne} onClick={onLinkClick}>
        <LinkText activeTab={activeTab === EnumTabs.theme}>{t('pageSwitchTheme')}</LinkText>
      </StyledNavLink>

      <StyledNavLink to={Routes.pageTwo} onClick={onLinkClick}>
        <LinkText activeTab={activeTab === EnumTabs.language}>{t('pageSwitchLang')}</LinkText>
      </StyledNavLink>

      <StyledNavLink to={Routes.pageThree} onClick={onLinkClick}>
        <LinkText activeTab={activeTab === EnumTabs.pageThree}>{t('pageThree')}</LinkText>
      </StyledNavLink>
    </>
  )
}

export const Navigation = () => {
  return (
    <NavListContainer>
      <NavList />
    </NavListContainer>
  )
}

export const MobileNavigation = () => {
  const dispatch = useDispatch()
  const hideNavMenu = () => dispatch(setShowMenu(false))

  const onWrapperClick = () => {
    dispatch(setShowMenu(false))
  }

  const onMobileNavContainerClick = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()

  return (
    <Wrapper onClick={onWrapperClick}>
      <MobileNavContainer onClick={onMobileNavContainerClick}>
        <StyledCloseIcon onClick={hideNavMenu} />
        <NavList />
      </MobileNavContainer>
    </Wrapper>
  )
}

const NavListContainer = styled.nav`
  min-width: 200px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  padding: 20px;
`

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${zIndexLevels.two};
`

const MobileNavContainer = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  background-color: ${(props: DefaultThemeProps) => props.theme.background.primary};
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

const StyledCloseIcon = styled(CloseIcon)`
  width: 18px;
  height: 18px;
  align-self: flex-end;
  fill: ${(props: DefaultThemeProps) => props.theme.text.primary};
  cursor: pointer;
  margin-bottom: 20px;
`
