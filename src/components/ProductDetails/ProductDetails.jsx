import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Context } from '../AuthProvider/AuthProvider';

const ProductDetails = () => {
    const loadProducts = useLoaderData()
    console.log(loadProducts);
    const { user } = useContext(Context)
    console.log(user);
    const email = user.email
    const cart = { ...loadProducts, email }
    console.log(cart);
    const handleAddToCart = (e) => {
        e.preventDefault()
        fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cart),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
        <div className=' max-w-6xl mx-auto my-10 space-y-2 px-3'>
            <img className=' md:w-full lg:w-[60%] mx-auto rounded-md ' src={loadProducts?.image} alt="" />
            <div className=' lg:ml-[20%]'>
                <div className=' '>
                    <div className="text-justify">
                        <div className='space-y-2 '>
                            <h3><span className=" font-semibold text-[#1B1A1A] raleway">name: </span>{loadProducts.name}</h3>
                            <h3><span className=" font-semibold text-[#1B1A1A] raleway">price: </span>{loadProducts.price}</h3>
                            <h3><span className=" font-semibold text-[#1B1A1A] raleway">supplier: </span>{loadProducts.type}</h3>
                            <h3><span className=" font-semibold text-[#1B1A1A] raleway">chef: </span>{loadProducts.description}</h3>
                            <h3><span className=" font-semibold text-[#1B1A1A] raleway">supplier: </span>{loadProducts.ratting}</h3>
                        </div>
                    </div>
                    <button onClick={handleAddToCart} className=' bg-slate-500 px-5 py-2 rounded-md mt-2'>Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;