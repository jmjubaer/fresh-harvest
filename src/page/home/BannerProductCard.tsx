"use client";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { Spin } from "antd";
import Image from "next/image";
import Link from "next/link";
import image from "@/assets/banner-product-image.png";
const BannerProductCard = () => {
    return (
        <div className='bg-[#EBEBEB] flex items-center rounded-xl w-fit h-fit'>
            <div className='w-fit p-5'>
                <p className='text-secondary font-medium text-sm'>
                    Special Offer
                </p>
                <Link
                    href={`/products/67545db31cdb919fe028cf3f`}
                    className='sm:text-[28px] text-xs font-medium '>
                    <span className='text-primary-text'>Fresh Salad</span>
                </Link>
                <p className=' font-medium'>
                    <span className='text-secondary'>Up to</span>{" "}
                    <span className='border-2 border-primary rounded-[100%]'>
                        70%
                    </span>{" "}
                    <span className=''>off</span>
                </p>
                <span className='bg-[#176D38] py-1.5 px-3 rounded-4xl uppercase font-semibold text-sm text-white mt-2 inline-block'>
                    CODE : <span className='text-[#FAC714]'>FRESH25</span>
                </span>
            </div>
            <div className='w-fit rounded-lg'>
                <Image
                    src={image}
                    alt={"Product image "}
                    width={200}
                    height={200}
                    className='object-contain mx-auto rounded-lg '
                />
            </div>
        </div>
    );
};

export default BannerProductCard;
