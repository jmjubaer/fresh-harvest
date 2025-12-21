"use client";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { FaCircleUser } from "react-icons/fa6";

const DetailsSection = ({ description }: { description: string }) => {
    const onChange = (key: string) => {
        console.log(key);
    };
    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Description",
            children: (
                <p className='px-8 py-10 bg-[#F4F6F6] rounded-3xl lg:w-[70%]  '>
                    {description}
                </p>
            ),
        },
        {
            key: "2",
            label: "Reviews (1)",
            children: (
                <div className=' bg-[#F4F6F6] p-5 rounded-3xl lg:w-[70%]  '>
                    <div className='flex gap-3 '>
                        <div className='w-12'>
                            <FaCircleUser className='text-5xl text-gray-300' />
                        </div>
                        <div className=''>
                            <Rating
                                style={{
                                    maxWidth: 110,
                                }}
                                readOnly
                                orientation='horizontal'
                                value={5}
                            />
                            <div className='flex items-center gap-3'>
                                <p className='capitalize secondary_font font-medium text-xl'>
                                    Jane Doe
                                </p>
                                <p className='text-gray-400'>May 23, 2024</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div className='w-full'>
                            <p className='xs:text-lg text-base mt-3 text-gray-500'>
                                I absolutely love Fresh Harvest! The quality of
                                their produce is outstanding. It`s always fresh,
                                flavorful, and delicious. The convenience of
                                ordering online and having it delivered to my
                                doorstep saves me so much time. Fresh Harvest
                                has become my go-to for all my fruit and
                                vegetable needs.
                            </p>
                        </div>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div>
            <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
        </div>
    );
};

export default DetailsSection;
