import Image from "next/image";
import fruitImage from "@/assets/offer.png";
import SectionTag from "../shered/ui/SectionTag";
import { MyTimer } from "../shered/ui/Timer";
import bg from "@/assets/banner-bg.jpg";
import right_bottom from "@/assets/left-offer-bg.png";
import left_top from "@/assets/right-offer-bg.png";
import leaf from "@/assets/leaf.png";
import FloatingLeaf from "../shered/ui/FloatingLeaf";
const Offer = () => {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 10); // Adds 10 days
    return (
        <div className=' py-24 relative overflow-hidden'>
            <div className='container z-10 text-center sm:text-left sm:block flex flex-col justify-center items-center'>
                <SectionTag tag='Special Offer ' />
                <h2 className='lg:text-[80px] sm:text-6xl text-5xl font-medium z-10'>
                    Seasonal Fruit Bundle
                </h2>
                <p className='sm:text-5xl text-3xl font-medium mt-2 z-10'>
                    Discount up to <span className='text-primary'>80% OFF</span>
                </p>

                <MyTimer expiryTimestamp={expiry} />

                <span className='sm:text-[32px] text-2xl px-8 py-4 font-semibold bg-[#176D38] rounded-full text-white mt-8 inline-block'>
                    CODE : <span className='text-[#FAC714]'>FRESH28</span>
                </span>
            </div>
            <Image
                src={fruitImage}
                alt='Fruit Offer'
                className='absolute right-0 bottom-14 w-[50%] hidden lg:block'
            />
            {/* bg image */}
            <>
                <Image
                    src={bg}
                    alt='bg image'
                    className='absolute top-0 right-0 h-full w-full bg-[#749B3F] -z-10'
                />
                <Image
                    src={left_top}
                    alt='bg image'
                    className='absolute top-0 right-0 h-full w-full -z-10'
                />
                <Image
                    src={right_bottom}
                    alt='bg image'
                    className='absolute top-0 right-0 h-full w-full -z-10'
                />
                <Image
                    src={right_bottom}
                    alt='bg image'
                    className='absolute top-0 right-0 h-full w-full -z-10'
                />
            </>
            {/* Floating leaf */}
            <>
                <FloatingLeaf className='sm:top-14 top-5 sm:right-[20%] -right-5 -rotate-160' />
                <FloatingLeaf className='-bottom-5 -right-16 w-40 -rotate-40' />
                <Image
                    src={leaf}
                    alt='Floating Leaf'
                    className="absolute w-48 -bottom-20 -left-16 rotate-20 blur-md"
                />
            </>
        </div>
    );
};

export default Offer;
