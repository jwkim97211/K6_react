import React from 'react'
import { useState, useEffect } from "react"

export default function Time() {

    const [time, setTime] = useState(new Date())

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('. ');
        return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;
    }

    useEffect(() => {
        const t = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => { clearInterval(t); };
    }, []);
   
    const formattedDate = time.toLocaleDateString();
    const formattedTime = time.toLocaleTimeString();

  return (
    <div className='bg-slate-100 bg-opacity-80 w-1/6 h-full rounded-xl mx-3 mt-5 flex flex-col justify-start'>
       <div className="text-black font-bold mt-3 text-2xl text-center">{formatDate(formattedDate)}</div>
       <div className="text-black font-bold text-xl text-center">{formattedTime}</div>
    </div>
  )
}
