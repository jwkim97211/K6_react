export default function BoxOfficeinfo({str}) {
  return (
    <div className='w-4/5 flex justify-center items-center font-bold text-center bg-blue-300 text-white h-10'>
    {str === undefined && "영화를 선택해 주세요."}
    {str &&
      `${str.movieNm} - 
    누적관객수 : ${parseInt(str.audiAcc).toLocaleString()}명
    누적매출액 : ${parseInt(str.salesAcc).toLocaleString()}원`
    }
  </div>
  )
}
