import React from 'react'
import { ContainerRouter } from '../../Layouts/ContainerRouter/ContainerRouter'
// import { ButtonRegister } from '../../Layouts/ButtonRegister/ButtonRegister'
import { InputsRegister } from '../../Layouts/InputsRegister/InputsRegister'
import { ImageLogin } from '../../UI/ImageLogin/ImageLogin'




export const Register = () => {
  return (
    <div>
        <ImageLogin />
        <InputsRegister />
        <ContainerRouter />
    </div>
  )
}