import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setActiveTab } from 'store/modules/theme/reducer'
import { EnumTabs } from 'store/modules/theme/types'
import { DefaultThemeProps } from 'styles/types'

export const MainPage: FC /*<TProps>*/ = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setActiveTab(EnumTabs.main))
  }, [])
  return (
    <Container>
      <Text>Main Page</Text>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.span`
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
`
