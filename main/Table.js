import React from 'react';
import center from './center.svg'
import first from './first.svg'

export default function Table() {

    let num1 = [];
    while (num1.length < 8) {
        let num = Math.floor(Math.random() * 16);
        num1.push(num);
    }

    let num2 = [];
    while (num2.length < 8) {
        let num = Math.floor(Math.random() * 16);
        num2.push(num);
    }

    const train1 = num1.map((item, idx) => {
        let txtColor;
        let text;

        if (item >= 0 && item < 5) {
            txtColor = 'text-red-600';
            text = '혼잡';
        } else if (item >= 5 && item < 10) {
            txtColor = 'text-green-500';
            text = '보통';
        } else if (item >= 10) {
            txtColor = 'text-blue-500';
            text = '여유';
        }


        if (idx == 7) {
            return (
                <div key={idx} className="flex flex-col items-center font-semibold mt-4">
                    <img src={first} className='w-20' />
                    <div className='text-sm flex'>
                        <div className={`${txtColor} text-center`}>{text} {item}</div>
                    </div>
                </div>
            );
        } else {
            return (
                <div key={idx} className="flex flex-col items-center font-semibold mt-4">
                    <img src={center} className='w-20' />
                    <div className='text-sm flex'>
                        <div className={`${txtColor} text-center`}>{text}{item}</div>
                    </div>
                </div>
            );
        }
    });

    const train2 = num2.map((item, idx) => {
        let txtColor;
        let text;

        if (item >= 0 && item < 5) {
            txtColor = 'text-red-600';
            text = '혼잡';
        } else if (item >= 5 && item < 10) {
            txtColor = 'text-green-500';
            text = '보통';
        } else if (item >= 10) {
            txtColor = 'text-blue-500';
            text = '여유';
        }


        if (idx == 7) {
            return (
                <div key={idx} className="flex flex-col items-center font-semibold mt-4">
                    <img src={first} className='w-20' />
                    <div className='text-sm flex'>
                        <div className={`${txtColor} w-20 text-center`}>{text} {item}</div>
                    </div>
                </div>
            );
        } else {
            return (
                <div key={idx} className="flex flex-col items-center font-semibold mt-4">
                    <img src={center} className='w-20' />
                    <div className='text-sm flex'>
                        <div className={`${txtColor} w-20 text-center`}>{text} {item}</div>
                    </div>
                </div>
            );
        }
    });

    return (
        <div className='bg-white bg-opacity-80 w-2/3 p-4 rounded-xl'>
            <div className='flex flex-col justify-start mt-3'>
                <div className="flex items-center">
                    {train1}
                </div>
                <div className="flex items-center">
                    {train2}
                </div>
            </div>
        </div>
    );
}
