import React from "react";

const ButtonOutline = ({ children }: { children: React.ReactNode }) => {
    return (
        <button className='px-8 py-4 cursor-pointer text-lg font-semibold mt-4 rounded-lg text-primary border'>
            {children}
        </button>
    );
};

export default ButtonOutline;
