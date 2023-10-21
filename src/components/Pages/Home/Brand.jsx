import React, { useContext } from 'react';
import BrandCard from './BrandCard';
import { Context } from '../../AuthProvider/AuthProvider';

const Brand = () => {
    const { brands } = useContext(Context)

    return (
        <div className=' py-5 raleway'>
            <h2 className=' text-sm md:text-3xl lg:text-3xl font-semibold text-center hover:text-black '>Available Brands</h2>
            <div className=' my-10 max-w-6xl mx-auto gap-5 grid md:grid-cols-2 lg:grid-cols-2 items-center justify-between'>
                {
                    brands.map(brand => <BrandCard
                        key={brand.id}
                        brand={brand}
                    ></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brand;