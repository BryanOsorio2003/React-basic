import React,{useEffect,useState} from 'react'
import { Buttonlogin } from '../../UI/buttonLogin/Buttonlogin'
import { ImageLogin } from '../../UI/ImageLogin/ImageLogin'
import { Input } from '../../UI/Input/Input'


export const Login = () => {

    const [verification, setVerification] = useState(0);
  
    return (
    <div>
        <ImageLogin />
        <Input id='login' text='Username' name='username'/>
        <Input id='password' text='Password' name='password'/>
        <Buttonlogin />
    </div>
  )
}
