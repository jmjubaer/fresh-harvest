import Image from "next/image";
import logo from "@/assets/logo-bg.jpg";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={"/"} className='flex items-center gap-2'>
            <Image src={logo} alt='Logo'className="bg-white rounded-md" />
            <span className='sm:text-3xl text-2xl font-bold whitespace-nowrap'>Fresh Harvests</span>
        </Link>
    );
};

export default Logo;
