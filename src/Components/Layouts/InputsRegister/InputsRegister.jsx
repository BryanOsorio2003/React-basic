import React from 'react'
import { Button } from '../../UI/Button/Button'
import { Input } from '../../UI/Input/Input'


export const InputsRegister = () => {
  return (
    <div>
        <Input type='text' id='username' text='Username' name='username'/>
        <Input type='text' id='name' text='Name' name='name'/>
        <Input type='password' id='password' text='Password' name='password'/>
        <Button value='Register'/>
    </div>
  )
}