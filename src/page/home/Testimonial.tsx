"use client";
import Image from "next/image";
import image from "@/assets/testimonial.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import SectionHeading from "../shered/ui/SectionHeading";
import FloatingLeaf from "../shered/ui/FloatingLeaf";
import icon from "@/assets/icon.png";
const Testimonial = () => {
    return (
        <div className='container my-37.5 relative'>
            <SectionHeading
                tag='Testimonial'
                title='What Our Customers Say'
                description="Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:"></SectionHeading>
            <div className='lg:w-4/5 mx-auto mt-5'>
                <Swiper
                    // pagination={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 5000,
                    }}
                    modules={[Pagination, Autoplay]}
                    className='mySwiper'>
                    <SwiperSlide>
                        <div className='grid md:grid-cols-3 gap-6 sm:gap-8.5 items-center '>
                            <div className='relative pr-0 md:pr-8 pt-7'>
                                <div className='md:w-full w-[90%] sm:w-3/5 mx-auto h-full overflow-hidden rounded-full '>
                                    <Image
                                        src={image}
                                        alt='reviewer image'
                                        className='mx-auto w-full scale-200 origin-top'
                                    />
                                </div>
                                <Image
                                    src={icon}
                                    alt='Icon'
                                    className='absolute md:top-0 top-0 right-0 md:right-5 z-10'
                                />
                            </div>
                            <div className='p-8 bg-[#F4F6F6] col-span-1 md:col-span-2 h-fit rounded-3xl'>
                                <p className='sm:text-xl text-sm font-secondary'>
                                    &quot; I absolutely love Fresh Harvest! The
                                    quality of their produce is outstanding.
                                    It`s always fresh, flavorful, and delicious.
                                    The convenience of ordering online and
                                    having it delivered to my doorstep saves me
                                    so much time. Fresh Harvest has become my
                                    go-to for all my fruit and vegetable needs.
                                </p>
                                <p className='mt-8 text-lg'>
                                    <span className='font-medium'>
                                        Jane Doe
                                    </span>{" "}
                                    - Professional chef
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='grid md:grid-cols-3 gap-6 sm:gap-8.5 items-center '>
                            <div className='relative pr-0 md:pr-8 pt-7'>
                                <div className='md:w-full w-[90%] sm:w-3/5 mx-auto h-full overflow-hidden rounded-full '>
                                    <Image
                                        src={image}
                                        alt='reviewer image'
                                        className='mx-auto w-full scale-200 origin-top'
                                    />
                                </div>
                                <Image
                                    src={icon}
                                    alt='Icon'
                                    className='absolute md:top-0 top-0 right-0 md:right-5 z-10'
                                />
                            </div>
                            <div className='p-8 bg-[#F4F6F6] col-span-1 md:col-span-2 h-fit rounded-3xl'>
                                <p className='sm:text-xl text-sm font-secondary'>
                                    &quot; I absolutely love Fresh Harvest! The
                                    quality of their produce is outstanding.
                                    It`s always fresh, flavorful, and delicious.
                                    The convenience of ordering online and
                                    having it delivered to my doorstep saves me
                                    so much time. Fresh Harvest has become my
                                    go-to for all my fruit and vegetable needs.
                                </p>
                                <p className='mt-8 text-lg'>
                                    <span className='font-medium'>
                                        Jane Doe
                                    </span>{" "}
                                    - Professional chef
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='grid md:grid-cols-3 gap-6 sm:gap-8.5 items-center '>
                            <div className='relative pr-0 md:pr-8 pt-7'>
                                <div className='md:w-full w-[90%] sm:w-3/5 mx-auto h-full overflow-hidden rounded-full '>
                                    <Image
                                        src={image}
                                        alt='reviewer image'
                                        className='mx-auto w-full scale-200 origin-top'
                                    />
                                </div>
                                <Image
                                    src={icon}
                                    alt='Icon'
                                    className='absolute md:top-0 top-0 right-0 md:right-5 z-10'
                                />
                            </div>
                            <div className='p-8 bg-[#F4F6F6] col-span-1 md:col-span-2 h-fit rounded-3xl'>
                                <p className='sm:text-xl text-sm font-secondary'>
                                    &quot; I absolutely love Fresh Harvest! The
                                    quality of their produce is outstanding.
                                    It`s always fresh, flavorful, and delicious.
                                    The convenience of ordering online and
                                    having it delivered to my doorstep saves me
                                    so much time. Fresh Harvest has become my
                                    go-to for all my fruit and vegetable needs.
                                </p>
                                <p className='mt-8 text-lg'>
                                    <span className='font-medium'>
                                        Jane Doe
                                    </span>{" "}
                                    - Professional chef
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* Floating Leaf */}
            <>
                <FloatingLeaf className='sm:top-24 -top-20 sm:right-28 right-0 -rotate-45' />
                <FloatingLeaf className='sm:top-14 -top-10 left-0 sm:left-20' />
            </>
        </div>
    );
};

export default Testimonial;
