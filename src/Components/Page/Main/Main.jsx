import React from 'react'
import { ContainerButtons } from '../../Layouts/ContainerButtons/ContainerButtons'
import { ContainerInput } from '../../Layouts/ContainerInput/ContainerInput'
import { ImageLogin } from '../../UI/ImageLogin/ImageLogin'


export const Main = () => {
  return (
    <div>
        <ImageLogin />
        <ContainerInput/>
        <ContainerButtons />
    </div>
  )
}
