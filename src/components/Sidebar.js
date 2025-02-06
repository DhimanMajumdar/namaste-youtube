import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'

const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
  
  // early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48 bg-gradient-to-r from-white to-black'>
        <ul>
            <li className='font-bold'>Home</li>
            <li  className='font-bold'>Shorts</li>
            <li  className='font-bold'>Videos</li>
            <li  className='font-bold'>Live</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>WatchLater</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies </li>
        </ul>
        
    </div>
  )
}

export default Sidebar