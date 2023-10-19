import React from 'react';
import { Link } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
const BrandProductCard = ({ brandProduct }) => {
    const { _id, type, description, image, name, price, ratting } = brandProduct
    return (
        <div className='bg-[#F5F4F1] lg:flex gap-4  lg:items-center justify-between space-y-4 p-5 rounded-md'>
            <div className=' lg:w-[50%]'>
                <img src={image} alt="" />
            </div>
            <div className='space-y-1 lg:w-[40%]'>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">name: </span>{name}</h3>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">price: </span>{price} Tk</h3>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">Type: </span>{type}</h3>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">Description: </span>{description}</h3>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">Ratting: </span>{ratting}</h3>
                <div className="rating py-2">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
            <div className='lg:w-[10%] flex flex-row md:flex-row lg:flex-col justify-evenly px-24 lg:px-0 lg:gap-0 gap-4 lg:space-y-4'>
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
