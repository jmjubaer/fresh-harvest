import { TProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: TProduct }) => {
    return (
        <div className='px-3 pt-2.5 pb-5 bg-white rounded-lg shadow-xl border border-[#F4F6F6] cursor-pointer group'>
            <div className='bg-[#F4F6F6] rounded-lg'>
                <Image
                    src={product.images[0]}
                    alt={product.productName}
                    width={200}
                    height={200}
                    className='w-full lg:h-52 h-32 object-contain mx-auto bg-[#F4F6F6] rounded-lg object-cover'
                />
            </div>
            <div className='mt-3 text-center'>
                <Link
                    href={`/products/${product.id}`}
                    className='sm:text-lg text-xs font-medium '>
                    <span className='text-primary-text'>
                        {product.productName}
                    </span>
                </Link>
                <p className='mt-2 text-[#4A4A52] sm:text-lg text-xs font-secondary'>
                    ${product.price.toFixed(2)}/pcs
                </p>
                <button className='sm:text-lg text-xs w-full  sm:py-3 py-1.5 border rounded-lg mt-3 cursor-pointer group-hover:bg-primary group-hover:text-white duration-300'>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
