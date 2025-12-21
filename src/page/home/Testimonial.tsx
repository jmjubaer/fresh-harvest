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
const Testimonial = () => {
    return (
        <div className='container my-37.5 relative'>
            <SectionHeading
                tag='Testimonial'
                title='What Our Customers Say'
                description="Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:"></SectionHeading>
            <div className='lg:w-4/5 mx-auto mt-8'>
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
                        <div className='grid sm:grid-cols-3 items-center gap-8'>
                            <div className=''>
                                <Image
                                    src={image}
                                    alt='reviewer image'
                                    className='mx-auto'
                                />
                            </div>
                            <div className='p-8 bg-[#F4F6F6] sm:col-span-2 h-fit rounded-3xl'>
                                <p className='text-xl font-secondary'>
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
                        <div className='grid sm:grid-cols-3 items-center gap-8'>
                            <div className=''>
                                <Image
                                    src={image}
                                    alt='reviewer image'
                                    className='mx-auto'
                                />
                            </div>
                            <div className='p-8 bg-[#F4F6F6] sm:col-span-2 h-fit rounded-3xl'>
                                <p className='text-xl font-secondary'>
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
                        <div className='grid sm:grid-cols-3 items-center gap-8'>
                            <div className=''>
                                <Image
                                    src={image}
                                    alt='reviewer image'
                                    className='mx-auto'
                                />
                            </div>
                            <div className='p-8 bg-[#F4F6F6] sm:col-span-2 h-fit rounded-3xl'>
                                <p className='text-xl font-secondary'>
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
            <FloatingLeaf className="top-24 right-28 -rotate-45"/>
            <FloatingLeaf className="top-14 left-20"/>
            </>
        </div>
    );
};

export default Testimonial;
