import TailSelect from "../UI/TailSelect";
import TailInput from "../UI/TailInput"
import TailButton from "../UI/TailButton"
import { useState, useEffect, useRef } from "react";
import xydata from "./getxy.json"


export default function Frsct() {

    const[x,setX] = useState()
    const[y,setY] = useState()

    const dRef = useRef()
    const sRef = useRef()

    const handleDate = () => {
        console.log(dRef.current.value)
    }

    const handleArea = () => {
        let tm=xydata.filter(item=>item["1단계"]===sRef.current.value)
        setX(tm[0]["격자 X"])
        setY(tm[0]["격자 Y"])
        console.log(x,y)
    }

    let ops = xydata.map(item => item["1단계"])

    return (
        <div className="w-11/12 justify-start grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
            <div>
                <TailInput type="date" inputRef={dRef} ph="날짜선택" handleChange={handleDate} />
            </div>
            <div>
                <TailSelect handleClick={handleArea} ops={ops} sRef={sRef} opDef="---지역선택---" />
            </div>
            <div>
                <TailButton caption="초단기예보" color="blue" />
            </div>
            <div>
                <TailButton caption="단기예보" color="blue" />
            </div>
        </div>
    )
}
