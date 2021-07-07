// import { request } from 'api'
import { setIsLoading } from 'store/modules/auth/reducer'
import { AppDispatch } from 'store/store'
import { TAuthFormValues } from './types'
import { setError } from 'store/modules/errors/reducer'

export const authRequest = (data: TAuthFormValues, goHomePage: () => void) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setError(null))
    dispatch(setIsLoading(true))
    try {
      // const response = await request.post('/users/signin/email', {
      //   ...data,
      // })
      // localStorage.setItem('token', response.data.data.token)
      localStorage.setItem('token', 'response.data.data.token')
      dispatch(setIsLoading(false))
      goHomePage()
    } catch (error) {
      dispatch(setError(error.response.data))
      dispatch(setIsLoading(false))
    }
  }
}

export const logout = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(setError(null))
    try {
      // await request.post('/users/logout')
      localStorage.removeItem('persist:root')
      localStorage.removeItem('token')
    } catch (error) {
      dispatch(setError(error.response.data))
    }
  }
}
