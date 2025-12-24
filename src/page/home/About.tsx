import Image from "next/image";
import aboutImage from "@/assets/aboutimage.png";
import SectionTag from "../shered/ui/SectionTag";
import ButtonOutline from "../shered/ui/ButtonOutline";
import FloatingLeaf from "../shered/ui/FloatingLeaf";
import logo from "@/assets/logo.png";
import AboutProductCard from "./AboutProductCard";

const About = () => {
    return (
        <div id="about" className='lg:flex justify-center gap-10 container items-center pb-37.5 lg:mt-0 mt-16 relative'>
            <div className='lg:w-[57%] mx-auto relative'>
                <Image
                    src={aboutImage}
                    alt='About section image'
                    className=' '
                />
                {/* Floating logo */}
                <div className='w-fit h-fit bg-white rounded p-1 sm:px-3 absolute sm:bottom-60 bottom-27.5 right-[20%] flex items-center justify-center gap-2'>
                    <Image
                        src={logo}
                        alt='Logo'
                        className='bg-white rounded w-4 sm:w-8'
                    />
                    <h2 className='sm:text-lg text-xs font-bold'>Fresh Harvests</h2>
                </div>
                {/* Floating card */}
                <AboutProductCard />
            </div>
            <div className='lg:w-[45%] mt-6'>
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
            <FloatingLeaf className='lg:top-[10%] top-0 right-5 lg:left-1/2 lg:-translate-x-1/2 w-20 -rotate-45' />
        </div>
    );
};

export default About;
