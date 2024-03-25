import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { useState, useEffect, useRef } from 'react'
import TailInput from '../UI/TailInput'

export default function BoxOffice() {

    const boxref = useRef()
    const [boxList, setBoxList] = useState()
    const [trs, setTrs] = useState()
    const [str, setStr] = useState()

    const getData = (dt) => {
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json`
        url = `${url}?key=${process.env.REACT_APP_MOVIE_API}`
        url = `${url}&targetDt=${dt}`
        console.log(url)
        fetch(url)
            .then(resp => resp.json())
            .then(data => setBoxList(data.boxOfficeResult.dailyBoxOfficeList))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (!boxList) return
        const tm = boxList.map(item =>
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
        setTrs(tm)
    }, [boxList])

    const handleSelDate = () => {
        getData(boxref.current.value.replaceAll('-', ''))
    }

    const handleClick = (tm) => {
        setStr(tm)
    }

    return (
        <div className='w-full flex items-center justify-center flex-col'>
            <div className="w-4/5 flex justify-end items-center">
                <span className="text-sm mx-5 font-bold">날짜 선택</span>
                <div className="flex">
                    <TailInput type="date"
                        inputRef={boxref}
                        ph=''
                        handleChange={handleSelDate}
                    />
                </div>
            </div>
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
                        {trs}
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
        </div >
    )
}