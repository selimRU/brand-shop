import React from 'react';
import { Link } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import Rating from 'react-rating';
// var Rating = require('react-rating');
// React.createElement(Rating)
const BrandProductCard = ({ brandProduct, newProducts, setNewProducts }) => {
    const { _id, type, description, image, name, price, ratting } = brandProduct

    const handleDeleteProduct = () => {
        fetch(`https://brand-shop-assignment-server-side-3xu1ymexo.vercel.app/products/${_id}`, {
            method: "DELETE"

        })
            .then(res => res.json())
            .then(data => {

                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                })
                    .then((result) => {
                        console.log(data.deletedCount);
                        if (result.isConfirmed) {
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }
                            const remainingProduct = newProducts.filter(product => product._id !== _id)
                            setNewProducts(remainingProduct)
                        }
                    })

            })
    }
    return (
        <div className='bg-[#F5F4F1] lg:flex gap-4  lg:items-center justify-between space-y-4 p-5 rounded-md'>
            <div className=' lg:w-[60%]'>
                <img className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-100 rounded-md' src={image} alt="" />
            </div>
            <div className='space-y-1 lg:w-[40%]'>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">name: </span>{name}</h3>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">price: </span>{price} Tk</h3>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">Type: </span>{type}</h3>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">Description: </span>{description}</h3>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">Ratting: </span>{ratting}</h3>
                <Rating />
            </div>
            <div className='lg:w-[10%] flex flex-row md:flex-row lg:flex-col justify-evenly px-24 lg:px-0 lg:gap-0 gap-4 lg:space-y-8'>
                <div>
                    <Link to={`/productDetails/${_id}`}>
                        <button className=' bg-slate-500 hover:bg-slate-700 p-2 rounded-md'>
                            <BsEyeFill className=' text-[white]'></BsEyeFill>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={`/update/${_id}`}>
                        <button className='bg-slate-500 hover:bg-slate-700 p-2 rounded-md'>
                            <AiOutlineEdit className='  text-[white]'></AiOutlineEdit>
                        </button>
                    </Link>
                </div>
                <div>
                    <button onClick={() => handleDeleteProduct(_id)} className='bg-slate-500 hover:bg-red-500 p-2 rounded-md'>
                        <MdOutlineDelete className='  text-[white]'></MdOutlineDelete>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BrandProductCard;
