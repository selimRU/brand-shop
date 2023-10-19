import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Context } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user } = useContext(Context)
    const { logOut } = useContext(Context)

    const handleLogOut = () => {
        logOut()
    }
    const navlinks = <div className=' flex flex-col lg:flex-row gap-3 lg:gap-5 lg:text-white ralway'>
        <NavLink to="/"
            className={({ isActive }) =>
                isActive ? "underline" : ""
            }>Home</NavLink>
        <NavLink to="/addProducts"
            className={({ isActive }) =>
                isActive ? "underline" : ""
            }>Add Product</NavLink>
        <NavLink to="/myCart"
            className={({ isActive }) =>
                isActive ? "underline" : ""
            }>My Cart</NavLink>
    </div>

    return (
        <div className='bg-slate-500'>
            <div className="navbar max-w-6xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown z-50">
                        <label tabIndex={0} className="btn btn-white mr-16 md:mr-60 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <div className=' flex items-center gap-2'>
                        <img className=' hidden md:block lg:block' src="https://i.postimg.cc/7ZsRHr32/New-Project-2023-10-17-T203831-230-removebg-preview.png" alt="" />
                        <h3 className=' w-[150px] md:w-[250px] text-sm md:text-xl lg:text-2xl text-white rancho'>SAFWAN FOOD ZONE</h3>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                {
                    user ?
                        <div className="navbar-end">
                            <div className=" flex flex-col md:flex-row-reverse md:gap-3 lg:flex-row-reverse items-center lg:gap-2">
                                <img className=" end-6 h-6 rounded-full" src={user.photoURL} alt="" />
                                <p className=" text-xs lg:text-sm md:text-sm">{user.displayName}</p>
                            </div>
                            <button onClick={handleLogOut} className="btn">Log Out</button>
                        </div> :
                        <div className="navbar-end">
                            <Link to='/logIn'>
                                <button className="btn">Login</button>
                            </Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;