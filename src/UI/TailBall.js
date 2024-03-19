export default function TailBall({n}) {

    const color = [
        'bg-red-800',
        'bg-yellow-400',
        'bg-green-800',
        'bg-blue-800',
        'bg-purple-800'
    ]

    const ballColor=`w-16 h-16 font-bold text-xl rounded-full 
                     flex justify-center items-center m-1
                     ${color[parseInt(n/10)]} text-white`

  return (
    <div className={ballColor}>
      {n}
    </div>
  )
}
