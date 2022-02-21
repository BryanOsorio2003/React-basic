import React from 'react'

export const Input = ({text,id,name,type}) => {
  return (
    <div>
        <input type={type} id={id} placeholder={text} name={name}/>
    </div>
  )
}