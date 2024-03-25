import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import Data from './BoxOffice.json'
import { useState } from 'react'

export default function BoxOffice() {

  const movielist = Data.boxOfficeResult.dailyBoxOfficeList
  const myitems = movielist.map(item =>
    <tr className="hover:bg-gray-200 hover:font-bold" key={item.movieCd} onClick={() => { handleClick(item) }}>
      <td className="text-center">{item.rank}</td>
      <td>{item.movieNm}</td>
      <td className="text-right">{parseInt(item.salesAmt).toLocaleString()}원</td>
      <td className="text-right">{parseInt(item.audiCnt).toLocaleString()}명</td>
      <td className="flex items-center justify-center">
        {item.rankInten > 0 && <FaLongArrowAltUp className="text-red-600" />}
        {item.rankInten < 0 && <FaLongArrowAltDown className="text-blue-600" />}
        {parseInt(item.rankInten) !== 0 && Math.abs(item.rankInten)}
        {parseInt(item.rankInten) === 0 && <TiMinus />}
      </td>
    </tr>
  )
  const [str, setStr] = useState()
  const handleClick = (item) => {
    setStr(item)
  }

  return (
    <div className='w-full flex items-center justify-center flex-col'>
      <table className='w-4/5'>
        <thead>
          <tr className='text-center bg-blue-300 text-white h-10'>
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
        {str === undefined && "영화를 선택해 주세요."}
        {str &&
          `${str.movieNm} - 
        누적관객수 : ${parseInt(str.audiAcc).toLocaleString()}명
        누적매출액 : ${parseInt(str.salesAcc).toLocaleString()}원`
        }
      </div>
    </div >
  )
}