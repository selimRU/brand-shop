
import Brand from './Brand';
import Bannar from './Bannar';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useState } from 'react';

const Home = () => {
    const [theme, setTheme] = useState(false)

    const handleTheame = () => {
        setTheme(!theme)
    }
    AOS.init({
        duration: 2000,
    });
    return (
        <div onClick={handleTheame} className={theme ? 'bg-black text-white' : 'bg-white text-black'}>
            <div data-aos="fade-up" data-aos-once={true}>
                <div>
                    <Bannar></Bannar>
                    <Brand></Brand>
                </div>
            </div>
        </div>
    );
};

export default Home;