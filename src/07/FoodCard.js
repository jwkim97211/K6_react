import bank from './img/bank.png'
import market from './img/market.png'
import busan from './img/busan.png'
import { useState } from 'react'

export default function FoodCard({ fobj }) {

    const fimg = fobj.구분 === "기초푸드뱅크" ? bank :
        fobj.구분 === "기초푸드마켓" ? market : busan

    const [click, setClick] = useState(false)

    const handleisclick = () => {
        setClick(!click)
    }

    return (
        <div className='flex w-11/12 justify-center items-center border p-1'
            onClick={handleisclick}>
            <div className='w-1/6 flwx justify-center items-center'>
                <img src={fimg} alt={bank} className='w-full inline-flex' />
            </div>
            <div className='w-5/6 mx-3'>
                <h1 className='text-2xl text-slate-700 font-bold'>
                    {fobj.사업장명}
                </h1>
                <h2 className='text-xl font-bold text-slate-500'>
                    {fobj.운영주체명}
                </h2>
                <h2 className='text-sm text-slate-400'>
                    {fobj['사업장 소재지']}
                </h2>
                <div className='w-full bg-slate-600 text-white mt-2 p-2 text-sm h-9'>
                    {click && `Tel : ${fobj['연락처(대표번호)']}, Fax : ${fobj.팩스번호}`}
                </div>
            </div>
        </div>
    )
}
