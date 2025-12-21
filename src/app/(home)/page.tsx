import About from "@/page/home/About";
import Banner from "@/page/home/Banner";
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
        </div>
    );
};

export default HomePage;
