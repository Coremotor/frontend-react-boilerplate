import React, { FC } from 'react'
import styled from 'styled-components'
import { DefaultThemeProps } from 'styles/types'
import { GrFormClose } from 'react-icons/all'

type TProps = {
  name: string
  onClick: (name: string) => void
}

export const FileInfoItem: FC<TProps> = (props: TProps) => {
  const remove = () => props.onClick(props.name)
  return (
    <Item>
      <Name>{props.name}</Name>
      <StyledGrFormClose onClick={remove} />
    </Item>
  )
}

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Name = styled.span`
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  margin-right: 20px;
`

const StyledGrFormClose = styled(GrFormClose)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  & path {
    stroke: crimson;
  }
`
