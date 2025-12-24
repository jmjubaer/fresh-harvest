import blog_image_1 from "@/assets/blogImage_1.png";
import blog_image_2 from "@/assets/blogImage_2.png";
import blog_image_3 from "@/assets/blogImage_3.png";
import { TBlogs } from "@/types";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import SectionHeading from "../shered/ui/SectionHeading";
import FloatingLeaf from "../shered/ui/FloatingLeaf";
const blogs_data: TBlogs[] = [
    {
        image: blog_image_1,
        date: "May 23, 2024",
        title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
    },
    {
        image: blog_image_2,
        date: "May 23, 2024",
        title: "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
    },
    {
        image: blog_image_3,
        date: "May 23, 2024",
        title: "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
    },
];
const Blogs = () => {
    return (
        <div id="blog" className='container mb-37.5 relative'>
            <SectionHeading
                tag='Our Blog'
                title='Fresh Harvest Blog'
                description='Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.'></SectionHeading>
            <div className='grid md:grid-cols-3 gap-6 mt-10'>
                {blogs_data?.map((blog, index) => (
                    <div key={index}>
                        <Image src={blog.image} alt={blog.title} />
                        <p className='text-lg font-secondary text-[#4A4A52] mt-6'>
                            {blog.date}
                        </p>
                        <a href='#' className='text-lg font-medium mt-2'>
                            {blog.title}
                        </a>
                        <a
                            href='#'
                            className='text-primary font-semibold hover:underline flex items-center gap-2 mt-4 w-fit'>
                            Read More <FaArrowRightLong />
                        </a>
                    </div>
                ))}
            </div>
            {/* Floating leaf */}
            <>
                <FloatingLeaf className="sm:top-0 -top-15 sm:right-[10%] right-0 -rotate-45"/>
            </>
        </div>
    );
};

export default Blogs;
