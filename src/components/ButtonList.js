import React from 'react';
import Button from './Button';

const categories = [
  "All", "Gaming", "Songs", "Live", "Cricket", "Football", "WWE", "Cooking", 
  "Tennis", "Valentines", "Yoga", "Bollywood", "Hollywood","Virat Kohli","Swimmming", "Chess","Messi"
];

const ButtonList = () => {
  return (
    <div className='flex mx-2 px-3 gap-5 bg-gradient-to-l from-black to-gray-800 shadow-lg shadow-[#36454F] '>
      {categories.map((category, index) => (
        <Button key={index} name={category} />
      ))}
    </div>
  );
};

export default ButtonList;
