import React, { FC } from 'react'
import { Header } from './components/header'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Routes } from 'routes/routes'
import styled from 'styled-components'
import { MainPage } from '../main'
import { PageOne } from '../pageOne'
import { PageTwo } from '../pageTwo'
import { Footer } from './components/footer'
import { NotificationPopUp } from 'components/notificationPopUp'
import { PageThree } from 'pages/pageThree'
import { useDispatch, useSelector } from 'react-redux'
import { setError } from 'store/modules/errors/reducer'
import { getError } from 'store/modules/errors/selectors'
import { DefaultThemeProps } from 'styles/types'

export const HomePage: FC = () => {
  const dispatch = useDispatch()
  const error = useSelector(getError)

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

      <Header />
      <Switch>
        <Route exact path={Routes.home} component={MainPage} />
        <Route exact path={Routes.pageOne} component={PageOne} />
        <Route exact path={Routes.pageTwo} component={PageTwo} />
        <Route exact path={Routes.pageThree} component={PageThree} />
      </Switch>
      <Footer>Footer</Footer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100%;
  background-color: ${(props: DefaultThemeProps) => props.theme.background.primary};
`
