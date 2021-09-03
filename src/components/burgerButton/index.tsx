import React from 'react'
import { ReactComponent as BurgerIcon } from 'assets/hamburger.svg'
import styled from 'styled-components'
import { DefaultThemeProps } from 'styles/types'
import { useDispatch } from 'react-redux'
import { setShowNavMenu } from 'store/modules/ui/reducer'

export const BurgerButton = () => {
  const dispatch = useDispatch()
  const showNavMenu = () => {
    dispatch(setShowNavMenu(true))
  }

  return <StyledBurgerIcon onClick={showNavMenu} />
}

const StyledBurgerIcon = styled(BurgerIcon)`
  width: 24px;
  height: 24px;
  & path {
    stroke: ${(props: DefaultThemeProps) => props.theme.text.primary};
  }
  cursor: pointer;
  margin-right: 20px;
`
