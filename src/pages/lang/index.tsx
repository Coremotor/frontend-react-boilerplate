import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setActiveTab } from 'store/modules/ui/reducer'
import { EnumTabs } from 'store/modules/ui/types'
import { useTranslation } from 'react-i18next'

export const Lang: FC /*<Props>*/ = () => {
  const { i18n } = useTranslation()
  const dispatch = useDispatch()
  const changeLang = async (lg: string) => {
    await i18n.changeLanguage(lg)
  }

  useEffect(() => {
    dispatch(setActiveTab(EnumTabs.language))
  }, [])
  return (
    <Container>
      <LangSwitcher>
        <button disabled={i18n.language === 'en'} onClick={() => changeLang('en')}>
          en
        </button>
        <button disabled={i18n.language === 'ru'} onClick={() => changeLang('ru')}>
          ru
        </button>
      </LangSwitcher>
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

const LangSwitcher = styled.div`
  display: flex;
  align-items: center;

  & button {
    cursor: pointer;
    padding: 0 10px;
  }

  & button:not(:last-child) {
    margin-right: 10px;
  }
`
