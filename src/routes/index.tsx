import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from 'routes/private-route'
import { Routes } from 'routes/routes'
import { AuthPage } from 'pages/auth'
import { Home } from 'pages/home'
import { ErrorPage } from 'pages/error'

export const RootRoute: FC = () => (
  <Router>
    <Switch>
      <Route path={Routes.auth}>
        <AuthPage />
      </Route>
      <Route path={Routes.error}>
        <ErrorPage />
      </Route>
      <PrivateRoute path={Routes.main}>
        <Home />
      </PrivateRoute>
    </Switch>
  </Router>
)
