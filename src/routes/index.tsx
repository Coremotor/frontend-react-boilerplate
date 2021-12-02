import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from 'routes/private-route'
import { Routes } from 'routes/routes'
import { AuthPage } from 'pages/auth'
import { Home } from 'pages/home'

export const RootRoute: FC = () => (
  <Router>
    <Switch>
      <Route path={Routes.auth}>
        <AuthPage />
      </Route>
      <PrivateRoute path={Routes.main}>
        <Home />
      </PrivateRoute>
    </Switch>
  </Router>
)
