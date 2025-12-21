import About from "@/page/home/About";
import Banner from "@/page/home/Banner";
import Blogs from "@/page/home/Blogs";
import Offer from "@/page/home/Offer";
import Products from "@/page/home/Products";
import Testimonial from "@/page/home/Testimonial";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Products />
            <About/>
            <Offer/>
            <Testimonial/>
            <Blogs/>
        </div>
    );
};

export default HomePage;
