import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navlinks = <div className=' flex flex-col lg:flex-row gap-3 lg:gap-5 lg:text-white ralway'>
        <NavLink>Home</NavLink>
        <NavLink>Add Product</NavLink>
        <NavLink>My Cart</NavLink>
    </div>

    return (
        <div className='bg-slate-500'>
            <div className="navbar max-w-6xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
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
                <div className="navbar-end">
                    <button className="btn">Login</button>
                </div>
                {/* <div className="navbar-end">
                <button className="btn">Log Out</button>
            </div> */}
            </div>
        </div>
    );
};

export default Navbar;