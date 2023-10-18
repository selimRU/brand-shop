import React, { useContext } from 'react';
import BrandCard from './BrandCard';
import { Context } from '../../AuthProvider/AuthProvider';

const Brand = () => {
    const { brands } = useContext(Context)
    
    return (
        <div className=' my-10 max-w-6xl mx-auto gap-5 grid md:grid-cols-2 lg:grid-cols-2 items-center justify-between'>
            {
                brands.map(brand => <BrandCard
                    key={brand.id}
                    brand={brand}
                ></BrandCard>)
            }
        </div>
    );
};

export default Brand;