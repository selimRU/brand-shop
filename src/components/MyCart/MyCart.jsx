import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const myCart = useLoaderData()
    console.log(myCart);
    return (
        <div className=" max-w-6xl mx-auto my-10">
            {
                myCart.map(cart => <div key={cart._id}>
                    <img className=" w-[60%] mx-auto" src={cart.image} alt="" />
                    <div className=" flex justify-center">
                        <div>
                            <p>Name: {cart.name}</p>
                            <p>Price: {cart.price}</p>
                            <p>Category: {cart.category}</p>
                            <p>Description: {cart.description}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyCart;