"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import {
    useGetSingleCategoryQuery,
    useGetSingleProductQuery,
} from "@/redux/features/product/productApi";
import { Spin } from "antd";
import { useState } from "react";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import SectionTag from "@/page/shered/ui/SectionTag";
import DetailsSection from "@/page/products/DetailsSection";
import RelatedProduct from "@/page/products/RealatedProducts";
import { TProduct } from "@/types";
const SingleProduct = ({ id }: { id: string }) => {
    const [quantity, setQuantity] = useState<number>(1);
    const { data, isLoading } = useGetSingleProductQuery(id);
    const product: TProduct = data?.data || {};
    console.log(data);

    return (
        <div className='mt-28 container'>
            <Spin tip='Loading' spinning={isLoading} size='large'>
                <div className='lg:grid lg:grid-cols-2 lg:gap-12 items-center'>
                    <div className='lg:h-full'>
                        <Swiper
                            pagination={true}
                            loop={true}
                            modules={[Pagination]}
                            className=' lg:h-full'>
                            {product?.images?.map((image: string) => (
                                <SwiperSlide key={image}>
                                    <Image
                                        width={300}
                                        height={300}
                                        src={image}
                                        unoptimized
                                        alt='Product image'
                                        className='lg:w-full lg:h-full object-contain  rounded-lg border-2 border-[#F4F6F6] sm:w-4/5 mx-auto'
                                    />
                                </SwiperSlide>
                            ))}{" "}
                        </Swiper>
                    </div>

                    <div className='mt-10 sm:mt-0'>
                        <SectionTag tag={product?.category?.categoryName} />
                        <h2 className='sm:text-5xl text-[32px] mt-4 font-medium'>
                            {product?.productName}
                        </h2>
                        <div className='flex items-center gap-1 mt-4'>
                            <Rating
                                style={{ maxWidth: 80 }}
                                readOnly
                                orientation='horizontal'
                                value={5}
                            />
                            <p className='text-lg font-medium '>
                                5.0 <span className='text-xs '>(1 review)</span>
                            </p>
                        </div>
                        <h3 className='sm:text-[32px] text-2xl font-semibold mt-4 text-primary'>
                            ${product?.price}/kg
                        </h3>
                        <p className='mt-4 font-secondary text-sm sm:text-lg'>
                            {product?.description?.slice(0, 300)}...
                        </p>

                        <div className='flex items-center gap-5 mt-4'>
                            <h4 className=' text-lg font-medium'>Quantity</h4>
                            <div className='flex border items-center w-fit'>
                                <button
                                    className='py-2 px-4 text-2xl cursor-pointer'
                                    onClick={() =>
                                        setQuantity(
                                            quantity > 1 ? quantity - 1 : 1
                                        )
                                    }>
                                    -
                                </button>
                                <p className='px-5 border-x py-2 text-2xl'>
                                    {quantity}
                                </p>
                                <button
                                    className='py-2 px-4 text-2xl cursor-pointer'
                                    onClick={() => setQuantity(quantity + 1)}>
                                    +
                                </button>
                            </div>
                            <p>/kg</p>
                        </div>
                        <div className='grid sm:grid-cols-2 gap-7 mt-10'>
                            <button className='text-lg py-4 font-semibold cursor-pointer flex items-center gap-2.5 bg-[#F4F6F6] text-center rounded-lg justify-center'>
                                <FaHeart className='text-2xl' /> Save as
                                favorite
                            </button>{" "}
                            <button className='text-lg py-4 font-semibold cursor-pointer flex items-center text-white gap-2.5 bg-primary text-center rounded-lg justify-center'>
                                <FaCartShopping className='text-2xl' /> Add to
                                cart
                            </button>
                        </div>
                    </div>
                </div>
                {/* Details section */}
                <div className='mt-16'>
                    <DetailsSection description={product?.description} />
                </div>
                {/* Related product  */}
                {/* Todo: use different loader for related products */}
                <RelatedProduct
                    productId={product?.id}
                    category={data?.data?.category?.categoryName}
                />
            </Spin>
        </div>
    );
};

export default SingleProduct;
