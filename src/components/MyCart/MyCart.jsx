import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const myCart = useLoaderData()
    console.log(myCart);
    return (
        <div className=" max-w-6xl mx-auto my-10 grid md:grid-cols-2 lg:grid-cols-3">
            {
                myCart?.map(cart => <div key={cart._id}>
                    <img className=" w-[300px] h-[200px] mx-auto" src={cart.image} alt="" />
                    <div className='space-y-1 ml-10 lg:w-[40%]'>
                        <h3><span className=" font-semibold text-[#1B1A1A] raleway">name: </span>{cart.name}</h3>
                        <h3><span className=" font-semibold text-[#1B1A1A] raleway">price: </span>{cart.price} Tk</h3>
                        <h3><span className=" font-semibold text-[#1B1A1A] raleway">Type: </span>{cart.type}</h3>
                        <h3><span className=" font-semibold text-[#1B1A1A] raleway">Description: </span>{cart.description}</h3>
                        <h3><span className=" font-semibold text-[#1B1A1A] raleway">Ratting: </span>{cart.ratting}</h3>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyCart;