import { useContext } from "react";
import { Context } from "../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import BrandProductCard from "./BrandProductCard";
import Footer from "../Shared/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const BrandProducts = () => {
    const { products, loading } = useContext(Context)
    const { name } = useParams()
    const brandProducts = products.filter(product => (product.name === name))
    console.log(brandProducts);
    return (
        <div className=" z-0">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
            >
                {
                    brandProducts.slice(0, 3).map(product => <SwiperSlide key={product._id}><img width={'100%'} src={product?.image} alt="" /></SwiperSlide>)
                }
            </Swiper>
            <div className=' relative border max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-5 px-3'>
                {brandProducts.length === 0 ? <div className=" absolute mt-10 md:left-[14%] lg:left-[30%] px-3">
                    <h3 className=' md:text-xl lg:text-2xl font-semibold'>Not available this brand's products at this moment<br />
                        please try later.Thanks for here...
                    </h3>
                </div> :
                    loading ? <>
                        <span className="loading loading-spinner loading-xs"></span>
                        <span className="loading loading-spinner loading-sm"></span>
                        <span className="loading loading-spinner loading-md"></span>
                        <span className="loading loading-spinner loading-lg"></span>
                    </> :
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