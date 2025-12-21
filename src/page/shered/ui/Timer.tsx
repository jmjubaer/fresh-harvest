"use client";
import React from "react";
import { useTimer } from "react-timer-hook";

type MyTimerProps = {
    expiryTimestamp: Date;
};

export function MyTimer({ expiryTimestamp }: MyTimerProps) {
    const { seconds, minutes, hours, days } = useTimer({
        expiryTimestamp,
        onExpire: () => console.warn("onExpire called"),
        interval: 20,
    });

    return (
        <div>
            <div className='flex items-center sm:gap-6 gap-3 mt-8 z-10'>
                <div className='sm:p-7 p-4 pb-3 text-center bg-white rounded-lg w-fit '>
                    <span className='block sm:text-[40px] text-[28px]'>
                        0{days}
                    </span>
                    <span className='sm:text-lg text-sm text-secondary'>
                        Days
                    </span>
                </div>
                <div className='sm:p-7 p-4 pb-3 text-center bg-white rounded-lg w-fit '>
                    <span className='block sm:text-[40px] text-[28px]'>
                        {hours}
                    </span>
                    <span className='sm:text-lg text-sm text-secondary'>
                        Hour
                    </span>
                </div>
                <div className='sm:p-7 p-4 pb-3 text-center bg-white rounded-lg w-fit '>
                    <span className='block sm:text-[40px] text-[28px]'>
                        {minutes}
                    </span>
                    <span className='sm:text-lg text-sm text-secondary'>
                        Min
                    </span>
                </div>
                <div className='sm:p-7 p-4 pb-3 text-center bg-white rounded-lg w-fit '>
                    <span className='block sm:text-[40px] text-[28px]'>
                        {seconds}
                    </span>
                    <span className='sm:text-lg text-sm text-secondary'>
                        Second
                    </span>
                </div>
            </div>
        </div>
    );
}
