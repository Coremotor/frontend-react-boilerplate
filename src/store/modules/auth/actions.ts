// import { request } from 'api'
import { setIsLoading } from 'store/modules/auth/reducer'
import { AppDispatch } from 'store/store'
import { TAuthFormValues } from './types'
import { setError } from 'store/modules/errors/reducer'

export const authRequest = (data: TAuthFormValues, goHomePage: () => void) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true))
    try {
      // const response = await request.post('/users/signin/email', {
      //   ...data,
      // })
      // localStorage.setItem('token', response.data.data.token)
      localStorage.setItem('token', 'response.data.data.token')
      goHomePage()
    } catch (error) {
      dispatch(setError(error.response.data))
    } finally {
      dispatch(setIsLoading(false))
    }
  }
}

export const logout = () => {
  return async (dispatch: AppDispatch) => {
    try {
      // await request.post('/users/logout')
      localStorage.removeItem('persist:root')
      localStorage.removeItem('token')
    } catch (error) {
      dispatch(setError(error.response.data))
    }
  }
}
