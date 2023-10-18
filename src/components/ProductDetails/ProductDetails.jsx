import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const { id } = useParams()
    const loadProducts = useLoaderData()
    const product = loadProducts.find(product => product._id === id)

    const handleAddToCart = (e) => {
        e.preventDefault()
        fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Wow!!!',
                        text: 'Added cart Successfully',
                    })
                }
            })
    }
    return (
        <div className=' max-w-6xl mx-auto my-10'>
            <img className=' w-[60%] mx-auto ' src={product?.image} alt="" />
            <div className=' flex justify-center'>
                <div>
                    <p>Name: {product.name}</p>
                    <p>Price: {product.price}</p>
                    <p>Category: {product.category}</p>
                    <p>Description: {product.description}</p>
                    <button onClick={handleAddToCart} className=' bg-slate-500 px-5 py-2 rounded-md'>Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;