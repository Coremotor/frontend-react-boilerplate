import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setActiveTab } from 'store/modules/ui/reducer'
import { EnumTabs } from 'store/modules/ui/types'
import { DefaultThemeProps } from 'styles/types'
import { useTranslation } from 'react-i18next'

export const MainPage: FC /*<TProps>*/ = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(setActiveTab(EnumTabs.main))
  }, [])
  return (
    <Container>
      <Text>{t('mainPage')}</Text>
    </Container>
  )
}

const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.span`
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
`
