import { useLoaderData, useParams } from "react-router-dom";
import CartCard from "./CartCard";
import { useContext, useState } from "react";
import { MdDangerous } from "react-icons/md";
import { Context } from "../AuthProvider/AuthProvider";

const MyCart = () => {
    const myCart = useLoaderData()
    console.log(myCart);
    const { user } = useContext(Context)
    const email = user.email
    console.log(user);
    const cartData = myCart.filter(cart => cart.email === email)
    const [newCart, setNewCart] = useState(cartData)
    console.log(newCart);

    return (
        <div className=" relative mb-[40%] max-w-6xl gap-5 mx-auto my-10 grid md:grid-cols-2 lg:grid-cols-3">
            {newCart.length === 0 ? <div className=" absolute md:left-[20%] lg:left-[30%] px-3 mt-5 mb-[55%] lg:mb-[55%]">
                <h3 className="  md:text-xl lg:text-2xl font-semibold"> You didn't added any product,please addcart first</h3>
                <MdDangerous className=" absolute lg:left-[45%] lg:mt-5 md:mt-5 md:left-[43%] left-[40%] text-red-500 text-6xl"></MdDangerous>
            </div>
                :
                newCart?.map(cart => <CartCard
                    key={cart._id}
                    cart={cart}
                    newCart={newCart}
                    setNewCart={setNewCart}
                ></CartCard>)
            }
        </div >
    );
};

export default MyCart;