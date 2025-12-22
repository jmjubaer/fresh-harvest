import google from "@/assets/Google.png";
import facebook from "@/assets/facebook.png";
import Image from "next/image";

const SocialLogin = () => {
    return (
        <div className='grid grid-cols-2 gap-4 mt-6'>
            <button className='flex items-center gap-3 border border-shadow rounded-lg justify-center p-3 cursor-pointer text-lg font-semibold'>
                {" "}
                <Image
                    width={20}
                    height={20}
                    src={google}
                    alt='Google Icon'
                />{" "}
                Google
            </button>
            <button className='flex items-center gap-3 border border-shadow rounded-lg justify-center p-3 cursor-pointer text-lg font-semibold'>
                {" "}
                <Image
                    width={20}
                    height={20}
                    src={facebook}
                    alt='Facebook Icon'
                />{" "}
                Facebook
            </button>
        </div>
    );
};

export default SocialLogin;
