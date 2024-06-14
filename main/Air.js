import React from 'react';
import { FaSadCry, FaMeh, FaSmile } from 'react-icons/fa';
import bar from './bar.svg'

export default function Air() {
    let num1 = Math.floor(Math.random() * (37 - 10 + 1)) + 10;
    let num2 = Math.floor(Math.random() * (560 - 430 + 1)) + 430;

    let bgColor1;
    let text1;
    let icon1;
    if (num1 >= 10 && num1 <= 15) {
        bgColor1 = 'text-green-500';
        text1 = '좋음';
        icon1 = <FaSmile className="text-green-500" />;
    } else if (num1 >= 16 && num1 <= 35) {
        bgColor1 = 'text-blue-400';
        text1 = '보통';
        icon1 = <FaMeh className="text-blue-400" />;
    } else if (num1 >= 36) {
        bgColor1 = 'text-red-500';
        text1 = '나쁨';
        icon1 = <FaSadCry className="text-red-500" />;
    } else {
        bgColor1 = 'text-gray-400';
        text1 = '없음';
        icon1 = null;
    }

    let bgColor2;
    let text2;
    let icon2;
    if (num2 >= 350 && num2 <= 450) {
        bgColor2 = 'text-green-500';
        text2 = '좋음';
        icon2 = <FaSmile className="text-green-500" />;
    } else if (num2 >= 451) {
        bgColor2 = 'text-blue-400';
        text2 = '보통';
        icon2 = <FaMeh className="text-blue-400" />;
    } else {
        bgColor2 = 'text-gray-400';
        text2 = '없음';
        icon2 = null;
    }

    return (
        <div className='bg-white bg-opacity-80 flex flex-col w-1/6 rounded-xl items-center justify-center'>
            <div className='text-black text-xl font-extrabold'>서면역</div>
            <div className='mb-3 mt-2 font-semibold'>
                <div className='text-black text-center mt-3 text-xs'><span className='text-black text-sm'>초미세먼지(PM2.5)</span></div>
                <div className={`${bgColor1} text-lg flex items-center`}>
                    {num1}µg/m³<span className='font-normal text-black'>/</span>{text1}
                    {icon1 && <span className="ml-1">{icon1}</span>}
                </div>
                {/* <div className='flex justify-center mt-2'>
                <img src={bar} className='w-20'/>
                </div> */}
            </div>
            <div className='font-semibold mt-3'>
                <div className='text-black text-center text-sm'><span className='text-black'>이산화탄소(CO2)</span></div>
                <div className={`${bgColor2} text-lg flex items-center`}>
                    {num2}ppm<span className='text-black font-normal'>/</span>{text2}
                    {icon2 && <span className="ml-1">{icon2}</span>}
                </div>
            </div>
            <div className='w-full text-xs text-right mr-3 mt-2'>1시간 평균</div>
        </div>
    );
}
