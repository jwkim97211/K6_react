import { useState } from "react";
import { GiOppositeHearts } from "react-icons/gi";

export default function MyList({ title, img, content }) {
    // 지역변수
    // let cnt=0

    //상태변수
    const [stcnt, setcnt] = useState(0) //초기값은 0으로 설정
    const handle = () => {
        setcnt(stcnt + 1)
    }

    return (
        <div className="flex w-full border rounded hover:bg-gray-200">
            <div className="w-1/4 max-w-40">
                <img className="h-full" src={img} alt={title} />
            </div>
            <div className="p-5 w-3/4">
                <h1 className="font-bold text-2xl text-gray-800">
                    {title}
                </h1>
                <p className="w-full text-gray-800">
                    {content}
                </p>
                <p className="w-full font-bold flex justify-end mt-3">
                    <span onClick={() => { handle() }}><GiOppositeHearts className="text-red-600 hover:text-black text-2xl" /></span>
                    <span className="mx-2">좋아요</span>
                    <span>{stcnt}</span>
                </p>
            </div>
        </div>
    )
}
