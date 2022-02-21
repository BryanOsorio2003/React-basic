import React, { useState } from 'react'
import { Button } from '../../UI/Button/Button'
import { Input } from '../../UI/Input/Input'


export const FormRegister = () => {
   
  const {userName, setUserName} = useState();
  const {Name, setName} = useState();
  const {password, setPassword} = useState();

  const url = 'https://backend-edw.herokuapp.com/usuario';

  axios.post(url,{
    "username":setUserName,
    "name":setName,
    "password":setPassword
  }).then(register => console.log(register))


  return (
    <div>
        <Input type='text' id='username' onChange={e=>setUserName(e.target.value)} text='Username'  name='username'/>
        <Input type='text' id='name' onChange={e=>setName(e.target.value)} text='Name' name='name'/>
        <Input type='password' id='password' onChange={e=>setPassword(e.target.value)} text='Password' name='password'/>
        <Button value='Register'/>
    </div>
  )
}