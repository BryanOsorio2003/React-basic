import React from 'react'

export const Input = ({text,id,name,type,onChange}) => {
  return (
    <div>
        <input type={type} id={id} onChange={onChange} placeholder={text} name={name}/>
    </div>
  )
}