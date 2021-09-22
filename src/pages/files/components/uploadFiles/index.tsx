import React, { ChangeEvent, FC } from 'react'
import styled from 'styled-components'
import { DefaultThemeProps } from 'styles/types'
import { FileInfoItem } from 'pages/files/components/fileInfoItem'

type TProps = {
  multiple: boolean
  label: string
  inputId: string
  inputName: string
  state: File[] | null
  setState: React.Dispatch<React.SetStateAction<File[] | null>>
  limitFilesCount: number
}

export const UploadFiles: FC<TProps> = (props: TProps) => {
  const addFile = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e
    if (files && files.length !== 0) {
      props.setState((prevState) => {
        if (prevState) {
          return [...prevState, ...Array.from(files)]
        } else {
          return Array.from(files)
        }
      })
    }
  }

  const removeFile = (name: string) => {
    if (props.state) {
      props.setState(props.state.filter((f) => f.name !== name))
    }
  }
  return (
    <>
      <FileLabel htmlFor={props.inputId}>{props.label}</FileLabel>
      <FileInput multiple={props.multiple} onChange={addFile} id={props.inputId} name={props.inputName} type="file" />

      {props.state && props.state?.length > 0 && (
        <FileList>
          {props.state.map((f, index) => {
            return <FileInfoItem key={index} name={f.name} onClick={removeFile} />
          })}
        </FileList>
      )}
      {props.state && props.state?.length > props.limitFilesCount && (
        <Warn>Кол-во файлов НЕ должно быть больше {props.limitFilesCount}!</Warn>
      )}
    </>
  )
}

const FileList = styled.div`
  padding: 5px;
  margin-bottom: 10px;
`

const FileLabel = styled.label`
  border: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  background-color: ${(props: DefaultThemeProps) => props.theme.background.primary};
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  cursor: pointer;
  padding: 6px;
  margin-top: 10px;
  &:hover {
    box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
`

const FileInput = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
  margin-bottom: 10px;
`

export const Warn = styled.div`
  text-align: center;
  color: crimson;
`
