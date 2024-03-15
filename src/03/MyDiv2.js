import MyDiv3 from "./MyDiv3";

export default function MyDiv2(probs) {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-700 w-4/5 h-4/5 text-white">
    <p className="flex justify-start w-4/5 font-bold text-2xl my-3">
        {`${probs.d1} > ${probs.d2}`}
    </p>
    <MyDiv3 dn1={probs.d1} dn2={probs.d2} dn3={probs.d3}/>
</div>
  )
}
