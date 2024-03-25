import { useState, useEffect, useRef } from "react";
import TailButton from "../UI/TailButton";


export default function RefVal() {
    let cnt = 0;                            //컴포넌트 변수
    const [stCnt, setStCnt] = useState(0)     //state 변수
    const refCnt = useRef(0)                //ref 변수

    const handlelocal = () => {
        cnt = cnt + 1
        console.log("cnt = ", cnt)

    }

    const handlestate = () => {
        setStCnt(stCnt + 1)

    }

    useEffect(() => {
        console.log("stcnt = ", stCnt)
    }, [stCnt])

    const handleref = () => {
        refCnt.current = refCnt.current + 1
        console.log("refCnt = ", refCnt.current)
    }

    return (
        <div className="w-11/12 grid grid-cols-3 gap-4 text-center">
            {/* 화면에 반영 안됨 */}
            <div>
                컴포넌트 변수(지역변수) : {cnt}
            </div>
            {/* 바뀔 때 마다 변경 */}
            <div>
                state 변수 : {stCnt}
            </div>
            {/* ref에서는 current써야함 {refCnt}만 적을 경우 오류 */}
            {/* 값을 가지고 있다가 화면이 랜더링 될 때 변경됨 */}
            <div>
                ref 변수 :  {refCnt.current}
            </div>
            <div>
                <TailButton caption="컴포넌트 변수"
                    color="blue"
                    handleClick={handlelocal} />
            </div>
            <div>
                <TailButton caption="state 변수"
                    color="blue"
                    handleClick={handlestate} />
            </div>
            <div>
                <TailButton caption="ref 변수"
                    color="blue"
                    handleClick={handleref} />
            </div>
        </div>
    )
}
