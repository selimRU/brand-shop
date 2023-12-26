
import Brand from './Brand';
import Bannar from './Bannar';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Feature from './Feature';
import Chef from './Chef';

const Home = () => {
    AOS.init({
        duration: 2000,
    });
    return (
        <div>
            <div data-aos="fade-up" data-aos-once={true}>
                <div>
                    <Bannar></Bannar>
                    <Feature></Feature>
                    <Brand></Brand>
                    <Chef></Chef>
                </div>
            </div>
        </div>
    );
};

export default Home;