import React from 'react';
import Swal from 'sweetalert2';

const CartCard = ({ cart, setNewCart, newCart }) => {
    const { _id, image, name, price, type, description, ratting } = cart;
    const handleDeleteProduct = () => {
        fetch(`http://localhost:5000/cart/${_id}`, {
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
        <div className=' shadow-md p-3 rounded-md'>
            <img className=" w-[300px] h-[200px] mx-auto" src={image} alt="" />
            <div className='space-y-1 ml-10 lg:w-[40%]'>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">name: </span>{name}</h3>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">price: </span>{price} Tk</h3>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">Type: </span>{type}</h3>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">Description: </span>{description}</h3>
                <h3><span className=" font-semibold text-[#1B1A1A] raleway">Ratting: </span>{ratting}</h3>
                <button onClick={handleDeleteProduct}>Delete</button>
            </div>

        </div>
    );
};

export default CartCard;