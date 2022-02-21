import React from 'react'

export const Input = ({text,id,name}) => {
  return (
    <div>
        <input type="text" id={id} placeholder={text} name={name}/>
    </div>
  )
}