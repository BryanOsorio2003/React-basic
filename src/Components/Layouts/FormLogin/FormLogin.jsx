import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../../UI/Button/Button'
import { Input } from '../../UI/Input/Input'



export const FormLogin = () => {
  return (
    <div>
        <Input type='text' id='login' text='Username' name='username'/>
        <Input type='password' id='password' text='Password' name='password'/>
        <NavLink to='/'><Button value='Login'/></NavLink>
    </div>
  )
}
