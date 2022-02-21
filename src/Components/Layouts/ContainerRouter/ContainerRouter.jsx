import React from 'react'
import { NavLink } from "react-router-dom";
import { Button } from '../../UI/Button/Button'
import'./ContainerRouter.css'

export const ContainerRouter = () => {
  return (
    <div className='Router'>
        <NavLink to='/'><Button value='Login'/></NavLink>
        <NavLink to='/Register'><Button value='Registrar'/></NavLink>
    </div>
  )
}
