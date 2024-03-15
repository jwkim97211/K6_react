export default function MyDiv3(probs) {
  return (
    <div className="flex justify-center items-start bg-gray-500 w-4/5 h-4/5 text-white">
    <p className="flex justify-start w-4/5 font-bold text-2xl my-3">
    {`${probs.dn1} > ${probs.dn2} > ${probs.dn3}`}
    </p>
</div>
  )
}
