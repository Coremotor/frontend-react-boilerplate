import React, { FC } from 'react'
import { Header } from './components/header'
// import { Header } from './components/header/headerWithNavMenu'
import { Route, Switch, useHistory } from 'react-router-dom'
import { Routes } from 'routes/routes'
import styled from 'styled-components'
import { MainPage } from '../main'
import { PageSwitchTheme } from '../pageSwitchTheme'
import { PageSwitchLang } from '../pageSwitchLang'
import { Footer } from './components/footer'
import { NotificationPopUp } from 'components/notificationPopUp'
import { PageWithParams } from 'pages/pageWithParams'
import { useDispatch, useSelector } from 'react-redux'
import { setError } from 'store/modules/errors/reducer'
import { getError } from 'store/modules/errors/selectors'
import { DefaultThemeProps } from 'styles/types'
import { MobileNavigation, Navigation } from 'pages/home/components/navigation/leftNavMenu'
// import { MobileNavigation, Navigation } from 'pages/home/components/navigation/topNavMenu'
import { getIsMobileDevise, getShowMenu } from 'store/modules/ui/selectors'
import { FilesPage } from 'pages/files'

export const Home: FC = () => {
  const dispatch = useDispatch()
  const error = useSelector(getError)
  const isMobile = useSelector(getIsMobileDevise)
  const showMenu = useSelector(getShowMenu)
  const history = useHistory()

  if (error?.statusCode === 401) {
    history.push(Routes.auth)
  }
  if (error?.statusCode === 404) {
    history.push(Routes.error)
  }

  return (
    <Container>
      {error && error.statusCode !== 404 && (
        <NotificationPopUp
          isError={true}
          title="Внимание"
          errorObj={error}
          closePopUp={() => dispatch(setError(null))}
        />
      )}

      {/*comment next line if use topNavMenu*/}
      {isMobile ? showMenu && <MobileNavigation /> : <Navigation />}
      <Wrapper>
        <Header />

        <Switch>
          <Route exact path={Routes.main} component={MainPage} />
          <Route exact path={Routes.theme} component={PageSwitchTheme} />
          <Route exact path={Routes.language} component={PageSwitchLang} />
          <Route exact path={Routes.pageWithParams + '/:id'} component={PageWithParams} />
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
