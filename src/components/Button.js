import React from 'react'

const Button = ({name}) => {
  return (
    <div>
    <button className=" rounded-md transition-all text-white font-black delay-100 hover:bg-slate-500">{name}</button>
    </div>
  )
}

export default Button