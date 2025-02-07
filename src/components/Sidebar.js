import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
  
  // early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48 bg-gradient-to-r from-gray-800 to-black text-white'>
        <ul className='mb-5'>
            <li className='font-bold'>
              <Link to="/">🏠 Home</Link>
              
            </li>
            <li  className='font-bold mt-7 cursor-pointer'> 👀 Shorts</li>
            <li  className='font-bold mt-7 cursor-pointer'> 📽️ Videos</li>
            <li  className='font-bold mt-7 cursor-pointer'> 📺📺 Live</li>
        </ul>
        
        <ul className>
            <li className='mt-1 font-semibold mb-5 cursor-pointer'> 🎵 Music</li>
            <li  className=' font-semibold mb-5 cursor-pointer'> 🏏 Sports</li>
            <li className=' font-semibold mb-5 cursor-pointer'> 🎮 Gaming</li>
            <li className=' font-semibold mb-5 cursor-pointer'> 🎥 Movies</li>
        </ul>
        
        
    </div>
  )
}

export default Sidebar