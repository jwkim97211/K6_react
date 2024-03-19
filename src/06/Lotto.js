import TailButton from "../UI/TailButton"
import TailBall from "../UI/TailBall"
import { useState } from "react"

export default function Lotto() {
    const [ball, setBall] = useState()
    const handleLottoClick = () => {
        let num = []
        while (num.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1
            if (!num.includes(n)) num.push(n)
        }

        const lottoBall = num.map((item, idx) => {
            if (idx === 5)
                return <>
                    <TailBall n={item} key={`ball${item}`} />
                    <div className="font-bold text-2xl">+</div>
                </>
            else
                return <TailBall n={item} key={`ball${item}`} />
        })
        setBall(lottoBall)
    }

    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="flex justify-center items-center my-10">
                {ball}
            </div>
            <TailButton caption='로또번호생성'
                color='blue'
                handleClick={handleLottoClick} />
        </div>
    )
}
