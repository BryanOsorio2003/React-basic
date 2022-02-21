import React from 'react'
import { ContainerRouter } from '../../Layouts/ContainerRouter/ContainerRouter'
import { ContainerInput } from '../../Layouts/ContainerInput/ContainerInput'
import { ImageLogin } from '../../UI/ImageLogin/ImageLogin'


export const Main = () => {
  return (
    <div>
        <ImageLogin />
        <ContainerInput/>
        <ContainerRouter />
    </div>
  )
}
