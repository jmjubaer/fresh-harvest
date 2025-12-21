import Image from "next/image";
import aboutImage from "@/assets/aboutimage.png";
import SectionTag from "../shered/ui/SectionTag";
import ButtonOutline from "../shered/ui/ButtonOutline";
import FloatingLeaf from "../shered/ui/FloatingLeaf";
import logo from "@/assets/logo-bg.jpg";

const About = () => {
    return (
        <div className='flex justify-center gap-10 container items-center pb-37.5 lg:-mt-10 relative'>
            <div className='w-[57%] mx-auto relative'>
                <Image
                    src={aboutImage}
                    alt='About section image'
                    className=' '
                />
                {/* Floating logo */}
                <div className='w-fit h-fit bg-white rounded p-1 absolute bottom-[30%] right-[20%] flex items-center justify-center gap-2'>
                    <Image
                        src={logo}
                        alt='Logo'
                        className='bg-white rounded w-8'
                    />
                    <h2 className='text font-bold'>Fresh Harvests</h2>
                </div>
                {/* Todo: Make card */}
                {/* Floating card */}
                {/* <div className='px-3 pt-2.5 pb-5 bg-white rounded-lg shadow-xl border border-[#F4F6F6] cursor-pointer group'>
                    <div className='bg-[#F4F6F6] rounded-lg'>
                        <Image
                            src={product.images[0]}
                            alt={product.productName}
                            width={200}
                            height={200}
                            className='w-full lg:h-52 h-32 object-contain mx-auto bg-[#F4F6F6] rounded-lg'
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
                </div> */}
            </div>
            <div className='w-[45%]'>
                <SectionTag tag='About us' />
                <h2 className='sm:text-5xl text-3xl font-medium mt-4'>
                    About Fresh Harvest
                </h2>
                <p className='my-4 text-sm font-secondary'>
                    Welcome to Fresh Harvest, your premier destination for
                    high-quality and fresh produce. We are passionate about
                    providing you with the finest fruits, vegetables, and salad
                    ingredients to nourish your body and delight your taste
                    buds. With a commitment to excellence, sustainability, and
                    customer satisfaction, Fresh Harvest is here to
                    revolutionize your grocery shopping experience.
                </p>
                <ButtonOutline>Read More</ButtonOutline>
            </div>

            {/* Floating leaf */}
            <FloatingLeaf className='top-[10%] left-1/2 -translate-x-1/2 w-20' />
        </div>
    );
};

export default About;
