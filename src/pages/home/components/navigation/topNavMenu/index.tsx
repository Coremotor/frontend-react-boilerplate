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
      <StyledNavLink isMobile={isMobile} to={Routes.main} onClick={onLinkClick}>
        <LinkText activeTab={activeTab === EnumTabs.main}>{t('mainPage')}</LinkText>
      </StyledNavLink>

      <StyledNavLink isMobile={isMobile} to={Routes.theme} onClick={onLinkClick}>
        <LinkText activeTab={activeTab === EnumTabs.theme}>{t('theme')}</LinkText>
      </StyledNavLink>

      <StyledNavLink isMobile={isMobile} to={Routes.language} onClick={onLinkClick}>
        <LinkText activeTab={activeTab === EnumTabs.language}>{t('lang')}</LinkText>
      </StyledNavLink>

      <StyledNavLink isMobile={isMobile} to={Routes.pageWithParams + '/' + '42'} onClick={onLinkClick}>
        <LinkText activeTab={activeTab === EnumTabs.pageWithParams}>{t('params')}</LinkText>
      </StyledNavLink>

      <StyledNavLink isMobile={isMobile} to={Routes.files} onClick={onLinkClick}>
        <LinkText activeTab={activeTab === EnumTabs.filesPage}>{t('filesPage')}</LinkText>
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

  const onWrapperClick = () => dispatch(setShowMenu(false))
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
  display: flex;
  align-items: center;
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

const StyledNavLink = styled(Link)<{ isMobile: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: ${({ isMobile }) => (isMobile ? '20px' : 0)};
  margin-right: ${({ isMobile }) => (isMobile ? 0 : '20px')};
  &:visited {
    color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  }
  &:active {
    color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  }
  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
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
