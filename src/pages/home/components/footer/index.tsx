import React, { FC } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { DefaultThemeProps } from 'styles/types'
import { useTranslation } from 'react-i18next'

export const Footer: FC = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Text>{t('footer')}</Text>
      <span>{format(Date.now(), 'yyyy')}</span>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props: DefaultThemeProps) => props.theme.background.primary};
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  border-top: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  padding: 20px;
`

const Text = styled.span`
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
`
