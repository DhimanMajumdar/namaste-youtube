import React from 'react';
import Button from './Button';

const categories = [
  "All", "Gaming", "Songs", "Live", "Cricket", "Football", "WWE", "Cooking", 
  "Tennis", "Valentines", "Yoga", "Bollywood", "Hollywood"
];

const ButtonList = () => {
  return (
    <div className='flex mx-2 gap-5'>
      {categories.map((category, index) => (
        <Button key={index} name={category} />
      ))}
    </div>
  );
};

export default ButtonList;
