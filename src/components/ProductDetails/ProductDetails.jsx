import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Context } from '../AuthProvider/AuthProvider';

const ProductDetails = () => {
    const loadProducts = useLoaderData()
    console.log(loadProducts);
    const { name, type, price, description, ratting, image, brand_name } = loadProducts
    console.log(loadProducts);
    const { user } = useContext(Context)
    console.log(user);
    const email = user.email
    const cart = {
        name: name,
        brand_name: brand_name,
        type: type,
        price: price,
        ratting: ratting,
        description: description,
        image: image,
        email
    }
    console.log(cart);
    const handleAddToCart = (e) => {
        e.preventDefault()
        fetch("https://brand-shop-assignment-server-side-7xzvemomc.vercel.app/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cart),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Wow!!!',
                        text: 'Added cart Successfully',
                    })

                }
                else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Failed to add to cart',
                        icon: 'error',
                    });
                }
            })
            .catch(error => {
                console.error('An error occurred:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to add to cart. Please try again later.',
                    icon: 'error',
                });
            })

    }
    return (
        <div className=' max-w-6xl mx-auto my-10 space-y-2 px-3 '>
            <div>
                <img className=' md:w-full lg:w-[60%] mx-auto rounded-md shadow-md p-5 ' src={image} alt="" />
            </div>
            <div className=' lg:ml-[20%]'>
                <div className=' '>
                    <div className='space-y-2'>
                        <h3><span className=" font-semibold text-[#1B1A1A] raleway">Name: </span>{name}</h3>
                        <h3><span className=" font-semibold text-[#1B1A1A] raleway">Price: </span>{price}</h3>
                        <h3><span className=" font-semibold text-[#1B1A1A] raleway">Type: </span>{type}</h3>
                        <h3><span className=" font-semibold text-[#1B1A1A] raleway">Description: </span>{description}</h3>
                        <h3><span className=" font-semibold text-[#1B1A1A] raleway">Ratting: </span>{ratting}</h3>
                    </div>
                    <button onClick={handleAddToCart} className=' text-white bg-slate-500 hover:bg-slate-700 px-5 py-2 rounded-md mt-2'>Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;