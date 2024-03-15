import MyDiv3 from "./MyDiv3";

export default function MyDiv2({d1,d2,d3}) {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-700 w-4/5 h-4/5 text-white">
    <p className="flex justify-start w-4/5 font-bold text-2xl my-3">
        {`${d1} > ${d2}`}
    </p>
    <MyDiv3 dn1={d1} dn2={d2} dn3={d3}/>
</div>
  )
}
