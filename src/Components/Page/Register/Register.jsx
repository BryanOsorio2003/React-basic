import React from 'react'
import { ContainerRouter } from '../../Layouts/ContainerRouter/ContainerRouter'
import { FormRegister } from '../../Layouts/FormRegister/FormRegister'
import { ImageLogin } from '../../UI/ImageLogin/ImageLogin'
import axios from 'axios'





export const Register = () => {
  // const url = 'https://backend-edw.herokuapp.com/usuario';

  // axios.post(url,{
  //   "username":"Bryan",
  //   "name":"bryan123",
  //   "password":"password"
  // }).then(register => console.log(register))

  return (
    <div>
        <ImageLogin />
        <FormRegister />
        <ContainerRouter />
    </div>
  )
}