import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const myCart = useLoaderData()
    console.log(myCart);
    return (
        <div className=" max-w-6xl mx-auto my-10 grid md:grid-cols-2 lg:grid-cols-3">
            {
                myCart?.map(cart => <div key={cart._id}>
                    <img className=" w-[300px] h-[200px] mx-auto" src={cart.image} alt="" />
                    <p>Name: {cart.name}</p>
                    <p>Price: {cart.price}</p>
                    <p>Category: {cart.category}</p>
                    <p>Description: {cart.description}</p>
                </div>)
            }
        </div>
    );
};

export default MyCart;