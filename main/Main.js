import React from 'react'
import Air from './Air'
import Table from './Table'
import Etc from './Etc'
import Time from './Time'

export default function Main() {
    return (
        <div className='bg-slate-500 bg-opacity-50 w-full h-screen flex flex-col'>
            <div className='flex-grow-0 flex-shrink-0 h-2/3 flex items-center'>
                <Time />
                <img className=' bg-slate-100 bg-opacity-80 h-full rounded-xl mr-3 mt-5 w-5/6' />
            </div>
            <div className='w-full h-1/3 flex'>
                <Air className='flex-1' />
                <Table className='flex-1' />
                <Etc className='flex-1' />
            </div>
        </div>

    )
}
