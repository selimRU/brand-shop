
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import chef from '../../../assets/c.png'
const Bannar = () => {
    return (
        <div className=" relative">
            <div>
                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
                    <div>
                        <img src="https://i.postimg.cc/N0CmjTxg/ban1.png" />
                    </div>
                    <div>
                        <img src="https://i.postimg.cc/wvtJyvWD/ban3.png" />
                    </div>
                    <div>
                        <img src="https://i.postimg.cc/zDbS3dM4/ban.png" />
                    </div>
                    <div>
                        <img src="https://i.postimg.cc/d0VGFnrH/ban2.png" />
                    </div>
                </Carousel>
                <img className=" h-full md:h-full left-[2%] lg:h-full absolute bottom-0" src={chef} alt="" />
            </div>
            <div className=" absolute bottom-0 opacity-50 bg-black h-full w-full"></div>
            <h3 className=" absolute z-50 rancho left-[50%] lg:left-[55%] bottom-[25%] text-xl md:text-4xl lg:text-7xl text-white">Everything is here , take ,<br/> taste and enjoy</h3>
        </div>
    );
}


export default Bannar;