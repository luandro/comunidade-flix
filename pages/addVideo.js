import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Router from 'next/router'
import { uploadFile } from '../utils/api'

export default () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log('acceptedFiles', acceptedFiles)
    let data = new FormData()
    data.append('file', acceptedFiles[0])
    uploadFile(data)
    .then(res => {
      console.log('res', res)
      Router.push(`/video?id=${res._id}`)
    })
    .catch(err => console.log('Errror', err))
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  return (
    <div {...getRootProps()}>
      <h2>Escolha o video para subir ao servidor.</h2>
      <div className="input">
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
      <style jsx>{`
        margin: 0 auto;
        text-align: center;
        h2 {
          padding-bottom: 45px;
        }
        .input {
          margin: 0 auto;
          text-align: center;
          max-width: 250px;
          border: 1px solid black;
          padding: 10px;
        }
      `}</style>
    </div>
  )
}