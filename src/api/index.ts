import axios from 'axios'
import { config } from 'config/config'
import { errorNotify } from 'error'
import { Routes } from 'routes/routes'

export const request = axios.create({
  baseURL: config.baseUrl,
  responseType: 'json',
})

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

request.interceptors.response.use(
  (response) => {
    return response
  },
  function (error) {
    errorNotify(error)
    if (error.response.data.statusCode === 401 || error.response.data.error === 'Access denied') {
      localStorage.removeItem('token')
      location.replace(Routes.auth)
    }
    return Promise.reject(error)
  },
)
