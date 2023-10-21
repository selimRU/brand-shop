import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const updatedProduct = useLoaderData()
    const { _id, type, description, image, name, price, ratting,brand_name } = updatedProduct
    const handleUpdateProduct = (e) => {
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const brand_name = form.brand_name.value
        const name = form.name.value
        const type = form.type.value
        const price = form.price.value
        const description = form.description.value
        const ratting = form.ratting.value
        const updatedProduct = { name, type, price, description, ratting, image, brand_name }
        fetch(`https://brand-shop-assignment-server-side-3xu1ymexo.vercel.app/products/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Wow!!!',
                        text: 'Updated Successfully',
                    })
                }
            })
    }
    return (
        <div className="max-w-5xl mx-auto">
            <div className=" bg-slate-300 rounded-md py-5">
                <h3 className=" text-center rancho text-4xl text-[#374151]">Add New Product</h3>
                <p className=" text-center text-[#1B1A1AB3]">Welcome to the Product Add Page</p>
                <form onSubmit={handleUpdateProduct}>
                    <div className="w-[70%] mx-auto px-10">
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-[#1B1A1AB3]">
                                Image
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                    defaultValue={image}
                                    type="text"
                                    name="image"
                                    id="photo"
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-[#1B1A1AB3] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter photo URL"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-[#1B1A1AB3]">
                                Name
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                </div>
                                <input
                                    defaultValue={name}
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-[#1B1A1AB3] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter product name"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-[#1B1A1AB3]">
                                Brand name
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                </div>
                                <input
                                    defaultValue={brand_name}
                                    type="text"
                                    name="brand_name"
                                    id="brand"
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-[#1B1A1AB3] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter brand name"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-[#1B1A1AB3]">
                                Type
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                    defaultValue={type}
                                    type="text"
                                    name="type"
                                    id="type"
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-[#1B1A1AB3] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter type"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-[#1B1A1AB3]">
                                Price
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                    defaultValue={price}
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-[#1B1A1AB3] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter price"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-[#1B1A1AB3]">
                                Description
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                    defaultValue={description}
                                    type="text"
                                    name="description"
                                    id="description"
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-[#1B1A1AB3] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter description"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-[#1B1A1AB3]">
                                Rattings
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                    defaultValue={ratting}
                                    type="text"
                                    name="ratting"
                                    id="ratting"
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-[#1B1A1AB3] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter ratting"
                                />
                            </div>
                        </div>

                        <div className=' mt-6'>
                            <button className=" bg-slate-500 text-white w-full py-2 rounded-md" type="submit">Update Product</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;