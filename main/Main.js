import React from 'react'
import Air from './Air'
import Table from './Table'
import Map from './Map'
import Count from './Count'
import { FaTrainSubway } from "react-icons/fa6";
import sub from './SUB.svg'

export default function Main() {
    return (
        <div className='bg-gray-300 bg-opacity-50 w-full h-screen flex flex-col p-3 space-y-2'>
            <div className='flex-grow-[1] flex items-center space-x-2 ml-2 text-black font-semibold'>
                <FaTrainSubway />
                <span className="text-xl font-semibold">Metoronom</span>
            </div>
            <div className='flex-grow-[5] flex-shrink-0 h-3/5 flex items-center space-x-2'>
                <Count />
                <img src={sub} className='bg-white bg-opacity-80 h-full w-5/6 rounded-xl' />
            </div>
            <div className='w-full flex-grow-[3] flex space-x-2'>
                <Air />
                <Table />
                <Map />
            </div>
        </div>
    )
}
