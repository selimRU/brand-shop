import { useContext, useEffect, useState } from "react";
import { Context } from "../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import BrandProductCard from "./BrandProductCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'swiper/css';
import { MdDangerous } from "react-icons/md";
const BrandProducts = () => {
    const { products } = useContext(Context);
    const { name } = useParams();

    useEffect(() => {
        const brandProducts = products.filter(product => product.brand_name === name);
        // console.log(brandProducts);
        setNewProducts(brandProducts);
    }, [name, products]);

    const [newProducts, setNewProducts] = useState([]);
    // console.log(newProducts);
    return (
        <div className=" z-0">
            <div className="max-w-6xl mt-4 mx-auto px-3">
                <div className="relative">
                    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
                        <div>
                            <img src="https://i.postimg.cc/13rr3H7T/a1.png" />
                        </div>
                        <div>
                            <img src="https://i.postimg.cc/25Hd45D7/a2.png" />
                        </div>
                        <div>
                            <img src="https://i.postimg.cc/mDtYVGZf/a3.png" />
                        </div>
                    </Carousel>
                    <div className=" absolute bottom-0 opacity-40 bg-black h-full w-full">
                    </div>
                    <h3 className=" absolute z-50 bottom-[25%] md:bottom-[30%] lg:bottom-[20%] left-[15%] md:left-[10%] lg:left-[15%] text-white text-xs md:text-lg lg:text-2xl">আমাদের সাথে<br />জীবন হোক উৎসবমুখর...
                    </h3>
                </div>
            </div>
            <div className='  mt-5 mb-[50%] max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-5 px-3'>
                {newProducts.length === 0 ? <div className="absolute md:left-[2%] lg:left-[18%] px-3 mt-5  lg:mb-[75%]">
                    <h3 className="  md:text-xl lg:text-2xl font-semibold"> Not available this brand's products at this moment
                        please try later.Thanks for here...</h3>
                    <MdDangerous className=" absolute lg:left-[45%] lg:mt-5 md:mt-5 md:left-[43%] left-[40%] text-red-500 text-6xl"></MdDangerous>
                </div>
                    :
                    newProducts.map(brandProduct => <BrandProductCard
                        key={brandProduct._id}
                        brandProduct={brandProduct}
                        newProducts={newProducts}
                        setNewProducts={setNewProducts}
                    ></BrandProductCard>)
                }
            </div>
        </div>
    );
};

export default BrandProducts;