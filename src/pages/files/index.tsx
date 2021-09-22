import React, { useEffect, useState } from 'react'
import { setActiveTab } from 'store/modules/ui/reducer'
import { EnumTabs } from 'store/modules/ui/types'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { UploadFiles } from 'pages/files/components/uploadFiles'

export const FilesPage = () => {
  const dispatch = useDispatch()

  const [filesState, setFilesState] = useState<File[] | null>(null)

  useEffect(() => {
    dispatch(setActiveTab(EnumTabs.filesPage))
  }, [])

  const showInConsole = () => console.log('FilesState', filesState)

  return (
    <Container>
      <UploadFiles
        multiple={true}
        label="Выбрать файлы (не больше двух)"
        inputId="files"
        inputName="files"
        state={filesState}
        setState={setFilesState}
        limitFilesCount={2}
      />

      <Button onClick={showInConsole}>Показать в консоли</Button>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`

const Button = styled.button`
  padding: 5px 10px;
`
