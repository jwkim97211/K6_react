import './Hello.css';

function Hello() {
    let n = Math.floor(Math.random() * 99) + 1

    const st = {
        backgroundColor: "lightskyblue",
        color: "white"
    }
    const time = new Date()
    

    // let x

    // let s = ''
    // if(n%2==0) s="짝수"
    // else s="홀수"

    return (    //return문 안에서는 jsx문법 사용, if문 사용불가
        <h1>
            <p>
            {time.toLocaleTimeString()}
            </p>
            <span style={st}>Hello!</span>
            <span style={{ display: "inline-flex", margin: "10px", color: "lightgreen" }}>
                {n<10&&"0"}{n}     {/*조건을 앞에 써서 0이 앞에 붙음*/}
                {/* {n<10 ? `0${n}`:n} */}
            </span>
            {/* {s} */}
            {(n % 2 == 0) ? <span style={{ color: "red" }}>짝수</span> : <span style={{ color: "blue" }}>홀수</span>}
            {(n % 2 == 0) && "🍊"}
            {(n % 2 == 1) && "🍌"}      {/*조건을 뒤에 써서 이모지가 뒤에 붙음*/}
            {/* <p>{x || "x는 undefinded입니다"}
            </p> */}
        </h1>
    )
}
export default Hello