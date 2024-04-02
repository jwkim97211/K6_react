import TailSelect from "../UI/TailSelect";
import TailInput from "../UI/TailInput"
import TailButton from "../UI/TailButton"
import { useState, useRef } from "react";
import xydata from "./getxy.json"
import { useNavigate } from "react-router-dom";


export default function Frsct() {

    const [x, setX] = useState()
    const [y, setY] = useState()
    const [area, setArea] = useState()
    const [dt, setDt] = useState()

    const dRef = useRef()
    const sRef = useRef()

    const navigator = useNavigate()

    const handleDate = () => {
        setDt(dRef.current.value.replaceAll('-', ''))
    }

    const handleArea = () => {
        if (sRef.current.value === '' || sRef.current.value === undefined)
            return
        let tm = xydata.filter(item => item["1단계"] === sRef.current.value)
        setX(tm[0]["격자 X"])
        setY(tm[0]["격자 Y"])
        setArea(sRef.current.value)
        console.log(x, y)
    }

    const handleUltra = () => {
        if (dt === '' || dt === undefined) {
            alert("날짜를 선택하세요.")
            dRef.current.focus()
            return
        }

        if (area === '' || area === undefined) {
            alert("지역를 선택하세요.")
            sRef.current.focus()
            return
        }

        navigator(`/ultra/${dt}/${sRef.current.value}/${x}/${y}`)
    }
    const handleVilage = () => {
        if (dt === '' || dt === undefined) {
            alert("날짜를 선택하세요.")
            dRef.current.focus()
            return
        }

        if (area === '' || area === undefined) {
            alert("지역를 선택하세요.")
            sRef.current.focus()
            return
        }

        navigator(`/vilage/${dt}/${sRef.current.value}/${x}/${y}`)
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
                <TailButton caption="초단기예보" color="blue" handleClick={handleUltra} />
            </div>
            <div>
                <TailButton caption="단기예보" color="blue" handleClick={handleVilage} />
            </div>
        </div>
    )
}
