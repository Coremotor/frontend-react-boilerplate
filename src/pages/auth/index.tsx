import React, { FC } from 'react'
import styled from 'styled-components'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TAuthFormValues } from 'store/modules/auth/types'
import { useDispatch, useSelector } from 'react-redux'
import { authRequest } from 'store/modules/auth/actions'
import { useHistory } from 'react-router-dom'
import { Routes } from 'routes/routes'
import { getIsLoading } from 'store/modules/auth/selectors'
import { setError } from 'store/modules/errors/reducer'
import { NotificationPopUp } from 'components/notificationPopUp'
import { getError } from 'store/modules/errors/selectors'

export const AuthPage: FC = () => {
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)

  const dispatch = useDispatch()
  const history = useHistory()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TAuthFormValues>()

  const watchAllFields = watch()
  const submitDisabled = !watchAllFields.email || !watchAllFields.password || watchAllFields.password.length < 6

  const onSubmit: SubmitHandler<TAuthFormValues> = (data) => {
    // console.log(data)
    dispatch(authRequest(data, goHomePage))
  }

  const inputHandler = () => {
    dispatch(setError(null))
  }

  const goHomePage = () => {
    history.push(Routes.home)
  }

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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          onInput={inputHandler}
          type="email"
          {...register('email', { required: true })}
          placeholder="Почта"
          autoComplete="off"
        />
        {errors.email && <span>Поле обязательно для заполнения</span>}
        <Input
          onInput={inputHandler}
          type="password"
          {...register('password', { required: true, minLength: 6 })}
          placeholder="Пароль"
          autoComplete="off"
        />
        {errors.password && <span>Пароль должен быть не менее 6 символов</span>}
        <Button disabled={submitDisabled}>{isLoading ? 'Вход...' : 'Войти'}</Button>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 20px;
`

const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`

const Button = styled.button`
  padding: 5px;
`
