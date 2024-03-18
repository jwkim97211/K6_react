import Data from './BoxOffice.json'
import BoxOffice from './BoxOffice'
import { useState } from 'react'

export default function BoxOfficeMain() {

    const movielist = Data.boxOfficeResult.dailyBoxOfficeList
    const myitems = movielist.map(item =>
        <BoxOffice rank={item.rank}
            name={item.movieNm}
            money={item.salesAmt}
            num={item.audiCnt}
            per={item.rankInten}
            key={item.rank}
        />
    )
    const[str,setStr]=useState()
    const handleClick=()=>{
    setStr(str)
    }

    return (
        <div className='w-full flex items-center justify-center flex-col'>
            <table className='w-4/5'>
                <thead>
                    <tr className='text-center bg-blue-300 text-white h-10' onClick={()=>{handleClick()}}>
                        <th className='w-10'>순위</th>
                        <th>영화명</th>
                        <th>매출액</th>
                        <th>관객수</th>
                        <th className='w-20'>증감율</th>
                    </tr>
                </thead>
                <tbody>
                    {myitems}
                </tbody>
            </table>
            <div className='w-4/5 flex justify-center items-center text-center bg-blue-300 text-white h-10'>
            </div>
        </div >
    )
}
