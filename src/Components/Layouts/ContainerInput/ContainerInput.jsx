import React from 'react'
import { Input } from '../../UI/Input/Input'


export const ContainerInput = () => {
  return (
    <div>
        <Input type='text' id='login' text='Username' name='username'/>
        <Input type='password' id='password' text='Password' name='password'/>
    </div>
  )
}
