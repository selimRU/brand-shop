
import Brand from './Brand';
import Bannar from './Bannar';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useContext, useState } from 'react';
import { Context } from '../../AuthProvider/AuthProvider';
import Feature from './Feature';
import Chef from './Chef';

const Home = () => {
    const { theme, toggleTheme } = useContext(Context)
    AOS.init({
        duration: 2000,
    });
    return (
        <div className={`${theme}`}>
            <div data-aos="fade-up" data-aos-once={true}>
                <div>
                    <Bannar></Bannar>
                    <div className=' flex justify-center py-3'>
                        <button className=' text-white bg-slate-500 text-sm px-2 py-1 rounded-md' onClick={toggleTheme}>Toggle Theme</button>
                    </div>
                    <Feature></Feature>
                    <Brand></Brand>
                    <Chef></Chef>
                </div>
            </div>
        </div>
    );
};

export default Home;