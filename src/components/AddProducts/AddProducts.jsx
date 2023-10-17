import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddCoffee = () => {


    const handleAddCoffee = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const supplier = form.supplier.value
        const price = form.price.value
        const chef = form.chef.value
        const taste = form.taste.value
        const details = form.details.value
        const photo = form.photo.value
        const newCoffee = { name, supplier, price, chef, taste, details, photo }
        fetch("http://localhost:5000/coffees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCoffee),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Wow!!!',
                        text: 'Added Successfully',
                        imageUrl: 'https://i.postimg.cc/vBMfLfRG/1.png',
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                    })
                }

            })
    }
    return (
        <div className="max-w-5xl mx-auto">
            <Link to='/'>
                <div className=" flex items-center gap-3">
                    <AiOutlineArrowLeft></AiOutlineArrowLeft>
                    <button className=" text-2xl rancho text-[#374151]">Back to home</button>
                </div>
            </Link>
            <div className=" bg-[#F4F3F0] rounded-md py-5">
                <h3 className=" text-center rancho text-4xl text-[#374151]">Add New Coffee</h3>
                <p className=" text-center text-[#1B1A1AB3]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br></br> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed<br></br> to using Content here.</p>
                <form onSubmit={handleAddCoffee}>
                    <div className="  space-y-3">
                        <div className=" flex gap-5 justify-center items-center px-10">
                            <div className=" w-[50%] space-y-5">
                                <div>
                                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-[#1B1A1AB3]">
                                        Name
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-[#1B1A1AB3] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Enter coffee name"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-[#1B1A1AB3]">
                                        Supplier
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="supplier"
                                            id="supplier"
                                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-[#1B1A1AB3] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Enter coffee supplier"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-[#1B1A1AB3]">
                                        Price
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-[#1B1A1AB3] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Enter coffee price"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className=" w-[50%] space-y-5">
                                <div>
                                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-[#1B1A1AB3]">
                                        Chef
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="chef"
                                            id="chef"
                                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-[#1B1A1AB3] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Enter coffee chef"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-[#1B1A1AB3]">
                                        Taste
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="taste"
                                            id="taste"
                                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-[#1B1A1AB3] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Enter coffee taste"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-[#1B1A1AB3]">
                                        Details
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="details"
                                            id="details"
                                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-[#1B1A1AB3] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Enter coffee details"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" px-10">
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-[#1B1A1AB3]">
                                Photo
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                    type="text"
                                    name="photo"
                                    id="photo"
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-[#1B1A1AB3] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter photo URL"
                                />
                            </div>
                        </div>
                        <div className="px-10 py-5">
                            <button className="bg-[#D2B48C] w-full py-2 rounded-md" type="submit">Add Coffee</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;