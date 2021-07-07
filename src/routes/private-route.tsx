import React from 'react'
import { Routes } from 'routes/routes'
import { Route, Redirect } from 'react-router-dom'
import { FC } from 'react'

type TProps = {
  path: Routes
}

export const PrivateRoute: FC<TProps> = ({ children, ...rest }) => {
  const token = localStorage.getItem('token')
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: Routes.auth,
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}
