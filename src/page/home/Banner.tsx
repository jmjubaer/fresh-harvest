import Image from "next/image";
import product from "@/assets/special-product.png";
import banner from "@/assets/banner.png";
import bg from "@/assets/banner-bg.jpg";
import arrow from "@/assets/arrow.png";
import playstore from "@/assets/play.png";
import applestore from "@/assets/app.png";
import SectionTag from "../shered/ui/SectionTag";
import FloatingLeaf from "../shered/ui/FloatingLeaf";
import BannerProductCard from "./BannerProductCard";
import Link from "next/link";
const Banner = () => {
    return (
        <div className=' w-full min-h-screen relative pt-48 pb-36'>
            {/* "Banner content" */}
            <div className='container'>
                <div className='md:w-3/5 z-20'>
                    <SectionTag tag='Welcome to Fresh Harvest' />
                    <h1 className='sm:text-[80px] text-5xl font-medium leading-[100%] mt-4 '>
                        Fresh Fruits and Vegetables
                    </h1>
                    <p className='mt-4 text-sm w-4/5 font-secondary z-20'>
                        At Fresh Harvests, we are passionate about providing you
                        with the freshest and most flavorful fruits and
                        vegetables
                    </p>
                    <Link href={"/shop"} className='text-white block w-fit bg-primary px-8 py-4 rounded-lg mt-8'>
                        Shop Now
                    </Link>
                    <Image
                        src={arrow}
                        alt='arrow '
                        className='absolute md:block hidden left-[10%] '
                    />

                    {/* product card */}
                    <div className='md:ml-[30%] my-5'>
                        <BannerProductCard />
                    </div>
                    <div className=''>
                        <p className='text-sm'>Download App:</p>
                        <div className='flex items-center'>
                            <button>
                                <Image
                                    src={applestore}
                                    alt='apple store'
                                    className='w-36'
                                />
                            </button>{" "}
                            <button>
                                <Image
                                    src={playstore}
                                    alt='play store'
                                    className='w-36'
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bg Image */}
            <Image
                src={bg}
                alt='bg image'
                className='absolute top-0 right-0 h-full w-full bg-[#749B3F] -z-10'
            />
            {/* Bg right color */}
            <div className='absolute top-0 right-0 h-full w-[30%] bg-[#749B3F] -z-10'></div>
            {/* Banner image */}
            <Image
                src={banner}
                alt='special product'
                className='absolute right-0 -z-10 bottom-0 sm:w-[45%] w-4/5'
            />
            {/* Floating Leaf */}
            <div className=''>
                <FloatingLeaf className='top-40 right-[35%] -rotate-45' />
                <FloatingLeaf className='top-20 -left-20 rotate-220 w-40' />
                <FloatingLeaf className='bottom-30 left-[1%] -rotate-40 w-30' />
            </div>
        </div>
    );
};

export default Banner;
