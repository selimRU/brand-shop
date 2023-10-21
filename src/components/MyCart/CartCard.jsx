import React from 'react';
import Swal from 'sweetalert2';

const CartCard = ({ cart, setNewCart, newCart }) => {
    const { _id, image, name, price, type, description, ratting } = cart;
    const handleDeleteProduct = () => {
        fetch(`https://brand-shop-assignment-server-side-7xzvemomc.vercel.app/cart/${_id}`, {
            method: "DELETE",
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
                            const remainingCart = newCart.filter(cart => cart._id !== _id)
                            setNewCart(remainingCart)
                        }
                    })
            })
    }
    return (
        <div className=' shadow-md rounded-md p-3'>
            <img className=" rounded-md w-[300px] h-[200px] mx-auto" src={image} alt="" />
            <div className='space-y-1 ml-10'>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">name: </span>{name}</h3>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">price: </span>{price} Tk</h3>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">Type: </span>{type}</h3>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">Description: </span>{description}</h3>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">Ratting: </span>{ratting}</h3>
                <button className=' text-white bg-slate-500 hover:bg-slate-700 px-5 py-2 rounded-md mt-2' onClick={handleDeleteProduct}>Delete</button>
            </div>
        </div>
    );
};

export default CartCard;