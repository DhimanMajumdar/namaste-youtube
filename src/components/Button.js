import React from 'react'

const Button = ({name}) => {
  return (
    <div className='flex-shrink-0'>
    <button className='bg-gray-200 px-4 py-1 rounded-md transition-all delay-100 gap-x-3 hover:bg-[#535252]'>{name}</button>
    </div>
  )
}

export default Button