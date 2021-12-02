import React, { FC } from 'react'
import { Header } from './components/header'
// import { Header } from './components/header/headerWithNavMenu'
import { Route, Switch } from 'react-router-dom'
import { Routes } from 'routes/routes'
import styled from 'styled-components'
import { MainPage } from '../main'
import { Theme } from '../theme'
import { Lang } from '../lang'
import { Footer } from './components/footer'
import { Params } from 'pages/params'
import { useSelector } from 'react-redux'
import { DefaultThemeProps } from 'styles/types'
import { MobileNavigation, Navigation } from 'pages/home/components/navigation/leftNavMenu'
// import { MobileNavigation, Navigation } from 'pages/home/components/navigation/topNavMenu'
import { getIsMobileDevise, getShowMenu } from 'store/modules/ui/selectors'
import { FilesPage } from 'pages/files'

export const Home: FC = () => {
  const isMobile = useSelector(getIsMobileDevise)
  const showMenu = useSelector(getShowMenu)

  return (
    <Container>
      {/*comment next line if use topNavMenu*/}
      {isMobile ? showMenu && <MobileNavigation /> : <Navigation />}
      <Wrapper>
        <Header />

        <Switch>
          <Route exact path={Routes.main} component={MainPage} />
          <Route exact path={Routes.theme} component={Theme} />
          <Route exact path={Routes.language} component={Lang} />
          <Route exact path={Routes.pageWithParams + '/:id'} component={Params} />
          <Route exact path={Routes.files} component={FilesPage} />
        </Switch>

        <Footer />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  min-width: 360px;
  display: flex;
  height: 100vh;
  background-color: ${(props: DefaultThemeProps) => props.theme.background.primary};
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
