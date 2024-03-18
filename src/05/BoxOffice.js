import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";

export default function BoxOffice({ rank, name, money, num, per }) {
  return (
    <tr className="hover:bg-gray-200 hover:font-bold">
      <td className="text-center">{rank}</td>
      <td>{name}</td>
      <td className="text-right">{parseInt(money).toLocaleString()}원</td>
      <td className="text-right">{parseInt(num).toLocaleString()}명</td>
      <td className="flex items-center justify-center">{per > 0 && <FaLongArrowAltUp className="text-red-600" />}{per < 0 && <FaLongArrowAltDown className="text-blue-600" />}{parseInt(per)===0&&<TiMinus />}
      {per!==0 &&Math.abs(per)}
      </td>
    </tr>
  )
}