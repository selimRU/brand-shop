import { useContext } from "react";
import { Context } from "../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import BrandProductCard from "./BrandProductCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from "../Shared/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const BrandProducts = () => {
    const { products } = useContext(Context)
    const { name } = useParams()
    console.log(name, products);

    const brandProducts = products.filter(product => (product.name === name))
    console.log(brandProducts);
    return (
        <div>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
            >
                {
                    brandProducts.slice(0, 3).map(product => <SwiperSlide key={product._id}><img width={'100%'} src={product?.image} alt="" /></SwiperSlide>)
                }
            </Swiper>
            <div className=' max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-5 px-3'>
                {
                    brandProducts.map(brandProduct => <BrandProductCard
                        key={brandProduct._id}
                        brandProduct={brandProduct}
                    ></BrandProductCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BrandProducts;