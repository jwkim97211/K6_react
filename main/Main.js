import React from 'react'
import Air from './Air'
import Table from './Table'
import Etc from './Etc'
import Time from './Time'
import { FaTrainSubway } from "react-icons/fa6";
import sub from './SUB.svg'

export default function Main() {
    return (
        <div className='bg-slate-400 bg-opacity-50 w-full h-screen flex flex-col p-3 space-y-2'>
            <div className='flex-grow-[1] flex items-center space-x-2'>
                <FaTrainSubway className='text-white' />
                <span className="text-xl text-white font-semibold">Metoronom</span>
            </div>
            <div className='flex-grow-[5] flex-shrink-0 h-3/5 flex items-center space-x-2'>
                <Time />
                <img src={sub} className='bg-white h-full rounded-xl w-5/6' />
            </div>
            <div className='w-full flex-grow-[3] flex space-x-2'>
                <Air />
                <Table />
                <Etc />
            </div>
        </div>
    )
}
