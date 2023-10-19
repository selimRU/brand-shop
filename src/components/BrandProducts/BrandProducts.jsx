import { useContext, useEffect, useState } from "react";
import { Context } from "../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import BrandProductCard from "./BrandProductCard";
import Footer from "../Shared/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const BrandProducts = () => {
    // const { products } = useContext(Context)
    // const { name } = useParams()
    // const brandProducts = products.filter(product => (product.name === name))
    // console.log(brandProducts);
    // const [newProducts, setNewProducts] = useState(brandProducts)
    // console.log(newProducts);
    const { products } = useContext(Context);
    const { name } = useParams();

    useEffect(() => {
        const brandProducts = products.filter(product => product.name === name);
        setNewProducts(brandProducts);
    }, [name, products]);

    const [newProducts, setNewProducts] = useState([]);
    console.log(newProducts);
    return (
        <div className=" z-0">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
            >
                {
                    newProducts.slice(0, 3).map(product => <SwiperSlide key={product._id}><img width={'100%'} src={product?.image} alt="" /></SwiperSlide>)
                }
            </Swiper>
            <div className=' relative border max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-5 px-3'>
                {newProducts.length === 0 ? <div className=" absolute mt-10 md:left-[14%] lg:left-[30%] px-3">
                    <h3 className=' md:text-xl lg:text-2xl font-semibold'>Not available this brand's products at this moment<br />
                        please try later.Thanks for here...
                    </h3>
                </div> :
                    newProducts.map(brandProduct => <BrandProductCard
                        key={brandProduct._id}
                        brandProduct={brandProduct}
                        newProducts={newProducts}
                        setNewProducts={setNewProducts}
                    ></BrandProductCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BrandProducts;