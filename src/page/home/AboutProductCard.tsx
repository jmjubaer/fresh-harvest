"use client";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import Image from "next/image";
import Link from "next/link";

const AboutProductCard = () => {
    const { data, isLoading } = useGetAllProductsQuery(undefined);

    if (isLoading) return null;

    const product = data?.data?.[0];
    if (!product) return null;
    return (
        <div className='p-1 sm:p-2.5 bg-white rounded-md sm:rounded-lg shadow-xl border border-[#F4F6F6] cursor-pointer w-fit absolute -bottom-5 right-10 sm:right-24 group'>
            <div className='bg-[#F4F6F6] rounded-lg'>
                <Image
                    src={product.images[0]}
                    alt={product.productName}
                    width={150}
                    height={110}
                    unoptimized
                    className=' w-18.75 sm:w-36 max-h-[120px] bg-[#F4F6F6] rounded-md md:rounded-lg '
                />
            </div>
            <div className='sm:mt-3 mt-1 text-center text-[6px] sm:text-[10px]'>
                <Link href={`/products/${product.id}`} className='font-medium '>
                    <span className='text-primary-text'>
                        {product.productName}
                    </span>
                </Link>
                <p className='sm:mt-2 mt-0.5 text-[#4A4A52] font-secondary'>
                    ${product.price.toFixed(2)}/pcs
                </p>
                <button className=' w-full p-1 md:p-1.5 border rounded-lg mt-1 md:mt-3 cursor-pointer group-hover:bg-primary group-hover:text-white duration-300'>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default AboutProductCard;
