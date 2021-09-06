import React, { FC } from 'react'
import styled from 'styled-components'
import { DefaultThemeProps } from 'styles/types'

type TProps = {
  name: string
  onClick: (name: string) => void
}

export const FileInfoItem: FC<TProps> = (props: TProps) => {
  return (
    <div>
      <Name>{props.name}</Name>
      <Del onClick={() => props.onClick(props.name)}>x</Del>
    </div>
  )
}

const Name = styled.span`
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  margin-right: 20px;
`

const Del = styled.span`
  cursor: pointer;
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  padding: 5px;
`
