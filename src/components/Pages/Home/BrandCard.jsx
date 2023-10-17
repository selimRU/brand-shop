import React from 'react';

const BrandCard = ({ brand }) => {
    const { name, image } = brand;
    return (
        <div className=' shadow-md p-5 rounded-md space-y-4'>
            <img className='p-5 rounded-md' src={image} alt="" />
            <h3 className='text-center text-xl font-semibold'>{name}</h3>
        </div>
    );
};

export default BrandCard;