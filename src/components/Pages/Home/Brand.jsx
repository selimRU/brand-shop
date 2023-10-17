import React, { useEffect, useState } from 'react';
import BrandCard from './BrandCard';

const Brand = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch('brand.json')
            .then(res => res.json())
            .then(data => {
                setBrands(data)
            })
    }, [])
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