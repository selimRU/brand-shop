import React from 'react';
import { Link } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
const BrandProductCard = ({ brandProduct }) => {
    const { _id, type, description, image, name, price,ratting } = brandProduct
    return (
        <div className='bg-[#F5F4F1] lg:flex  lg:items-center justify-between space-y-4 p-5 rounded-md'>
            <div>
                <img src={image} alt="" />
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
            <div>
                <p>Name: {name}</p>
                <p>Price: {price}</p>
                <p>Type: {type}</p>
                <p>Description: {description}</p>
                <p>Ratting: {ratting}</p>
            </div>
            <div className=' flex flex-row md:flex-row lg:flex-col justify-evenly px-24 lg:px-0 lg:gap-0 gap-4 lg:space-y-4'>
                <div>
                    <Link to={`/productDetails/${_id}`}>
                        <button className='bg-[#E3B577] p-2 rounded-md'>
                            <BsEyeFill className=' text-[white]'></BsEyeFill>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={`/update/`}>
                        <button className='bg-[#3C393B] p-2 rounded-md'>
                            <AiOutlineEdit className='  text-[white]'></AiOutlineEdit>
                        </button>
                    </Link>
                </div>
                <div>
                    <button className='bg-[#EA4744] p-2 rounded-md'>
                        <MdOutlineDelete className='  text-[white]'></MdOutlineDelete>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BrandProductCard;
