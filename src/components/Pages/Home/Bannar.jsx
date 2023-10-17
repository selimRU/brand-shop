
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Bannar = () => {
    return (
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
                <img src="https://i.postimg.cc/N0CmjTxg/ban1.png" />
            </div>
        </Carousel>
    );
}


export default Bannar;