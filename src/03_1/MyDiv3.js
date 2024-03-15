export default function MyDiv3({dn1,dn2,dn3}) {
  return (
    <div className="flex justify-center items-start bg-gray-500 w-4/5 h-4/5 text-white">
    <p className="flex justify-start w-4/5 font-bold text-2xl my-3">
    {`${dn1} > ${dn2} > ${dn3}`}
    </p>
</div>
  )
}
