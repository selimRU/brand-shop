import React from 'react';
import Brand from './Brand';
import Bannar from './Bannar';
import AOS from 'aos';
const Home = () => {
    AOS.init({
        duration: 2000,
    });
    return (
        <div className='bg-slate-100' data-aos="fade-up" data-aos-once={true}>
            <div>
                <Bannar></Bannar>
                <Brand></Brand>
            </div>
        </div>
    );
};

export default Home;