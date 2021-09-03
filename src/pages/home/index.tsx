import React, { FC } from 'react'
import { Header } from './components/header'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Routes } from 'routes/routes'
import styled from 'styled-components'
import { MainPage } from '../main'
import { PageSwitchTheme } from '../pageSwitchTheme'
import { PageSwitchLang } from '../pageSwitchLang'
import { Footer } from './components/footer'
import { NotificationPopUp } from 'components/notificationPopUp'
import { PageThree } from 'pages/pageThree'
import { useDispatch, useSelector } from 'react-redux'
import { setError } from 'store/modules/errors/reducer'
import { getError } from 'store/modules/errors/selectors'
import { DefaultThemeProps } from 'styles/types'
import { MobileNavigation, Navigation } from './components/navigation'
import { getIsMobileDevise, getShowMenu } from 'store/modules/ui/selectors'

export const Home: FC = () => {
  const dispatch = useDispatch()
  const error = useSelector(getError)
  const isMobile = useSelector(getIsMobileDevise)
  const showMenu = useSelector(getShowMenu)

  return (
    <Container>
      {error && error.error !== 'Not Found' && (
        <NotificationPopUp
          isError={true}
          title="Внимание"
          errorObj={error}
          closePopUp={() => dispatch(setError(null))}
        />
      )}

      {error?.error === 'Unauthorized' && (
        <Redirect
          to={{
            pathname: Routes.auth,
          }}
        />
      )}

      {error?.error === 'Not Found' && (
        <Redirect
          to={{
            pathname: Routes.error,
          }}
        />
      )}

      {isMobile ? showMenu && <MobileNavigation /> : <Navigation />}

      <Wrapper>
        <Header />

        <Switch>
          <Route exact path={Routes.main} component={MainPage} />
          <Route exact path={Routes.pageOne} component={PageSwitchTheme} />
          <Route exact path={Routes.pageTwo} component={PageSwitchLang} />
          <Route exact path={Routes.pageThree} component={PageThree} />
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
