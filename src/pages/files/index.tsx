import React, { ChangeEvent, useEffect, useState } from 'react'
import { FileInfoItem } from 'pages/files/components/fileInfoItem'
import { setActiveTab } from 'store/modules/ui/reducer'
import { EnumTabs } from 'store/modules/ui/types'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { DefaultThemeProps } from 'styles/types'
import { useTranslation } from 'react-i18next'

export const FilesPage = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const [filesState, setFilesState] = useState<File[] | null>(null)

  const sendFiles = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('Files', filesState)
  }

  const addFile = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e
    if (files && files.length !== 0) {
      setFilesState((prevState) => {
        if (prevState) {
          return [...prevState, ...Array.from(files)]
        } else {
          return Array.from(files)
        }
      })
    }
  }

  const removeFile = (name: string) => {
    if (filesState) {
      setFilesState(filesState.filter((f) => f.name !== name))
    }
  }

  useEffect(() => {
    dispatch(setActiveTab(EnumTabs.filesPage))
  }, [])

  return (
    <Container>
      <Label htmlFor="file">{t('chooseFiles')}</Label>
      <Input multiple onChange={addFile} id="file" name="file" type="file" />
      <Button onClick={sendFiles}>{t('sendFiles')}</Button>

      <FileList>
        {filesState &&
          filesState.map((f, index) => {
            return <FileInfoItem key={index} name={f.name} onClick={removeFile} />
          })}
      </FileList>
      {filesState && filesState?.length > 5 && <Warning>Кол-во прикрепленных файлов должно быть не больше 5!</Warning>}
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  padding: 20px;
`

const Label = styled.label`
  border: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  padding: 10px;
  margin-right: 20px;
  cursor: pointer;
`
const Input = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
  margin-bottom: 80px;
`

const FileList = styled.div`
  height: 400px;
  overflow: auto;
`

const Button = styled.button`
  border: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  background-color: transparent;
  font-size: 16px;
  padding: 10px;
`

const Warning = styled.div`
  color: crimson;
  margin-top: 20px;
`
