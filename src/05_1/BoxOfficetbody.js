import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";

export default function BoxOfficetbody({movielist,setStr}) {

     const handleClick = (item) => {
       setStr(item)
     }

    const myitems = movielist.map(item =>
      <tr className="hover:bg-gray-200 hover:font-bold h-12" 
          key={item.movieCd} onClick={() => { handleClick(item) }}>
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

  return (
    <tbody>
    {myitems}
    </tbody>
  )
}
