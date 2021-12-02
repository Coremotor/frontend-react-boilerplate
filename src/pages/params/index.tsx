import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setActiveTab } from 'store/modules/ui/reducer'
import { EnumTabs } from 'store/modules/ui/types'
import { DefaultThemeProps } from 'styles/types'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

export const Params: FC /*<Props>*/ = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    dispatch(setActiveTab(EnumTabs.pageWithParams))
  }, [])
  return (
    <Container>
      <Text>{t('pageWithParams') + ': ' + id}</Text>
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
