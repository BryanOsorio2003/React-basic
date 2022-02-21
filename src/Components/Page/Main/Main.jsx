import React from 'react'
import { ContainerRouter } from '../../Layouts/ContainerRouter/ContainerRouter'
import { FormLogin } from '../../Layouts/FormLogin/FormLogin'
import { ImageLogin } from '../../UI/ImageLogin/ImageLogin'


export const Main = () => {
  return (
    <div>
        <ImageLogin />
        <FormLogin/>
        <ContainerRouter />
    </div>
  )
}
