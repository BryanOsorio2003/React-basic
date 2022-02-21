import React from 'react'
import { NavLink } from "react-router-dom";
import { Button } from '../../UI/Button/Button'


export const ContainerButtons = () => {
  return (
    <div>
        <NavLink to='/'><Button value='Login'/></NavLink>
        <NavLink to='/Register'><Button value='Register'/></NavLink>
    </div>
  )
}
