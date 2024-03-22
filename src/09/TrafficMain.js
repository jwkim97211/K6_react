import { useEffect, useState } from "react"
import TrafficNav from "./TrafficNav"

export default function TrafficMain() {
    const [tdata, setTdata] = useState()    //전체fetch데이터
    const [c1, setC1] = useState()          //대분류 데이터
    const [selC1, setSelC1] = useState()    //선택된 대분류
    const [c2, setC2] = useState()          //중분류 데이터
    const [selC2, setSelC2] = useState()    //선택된 중분류
    const [detail, setDetail] = useState()      //상세정보
    const [info, setInfo] = useState()

    const getDataFetch = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`
        url = `${url}page=1&perPage=20&`
        url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}`
        console.log(url)

        getDataFetch(url)
    }, [])

    useEffect(() => {
        if (!tdata) return;      //2번찍히는데 처음이 undefined
        let tm = tdata.map(item => item["사고유형_대분류"]);
        tm = new Set(tm);
        tm = [...tm];
        setC1(tm)
    }, [tdata])

    useEffect(() => {
        if (!tdata) return;
        let tm = tdata.filter(item => item["사고유형_대분류"] === selC1)
            .map(item => item["사고유형_중분류"])
        setC2(tm)
        setInfo("") //초기화
    }, [selC1])

    useEffect(() => {
        if (!tdata) return;
        let tm = tdata.filter(item => item["사고유형_대분류"] === selC1 && item["사고유형_중분류"] === selC2)
        //filter결과는 array
        setDetail(tm[0])
    }, [selC2])

    useEffect(() => {
        if (!tdata) return;
        const keyArr = ["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"]
        let tm = keyArr.map(k =>
            <div key={k} className="w-6/12 flex mt-5 justify-center items-center">
                <div className="">
                    {k}
                </div>
                <div>
                    {detail[k]}
                </div>
            </div>
        )
        setInfo(tm)
    }, [detail])

    return (
        <div className="w-full h-full flex flex-col justify-start items-center mt-5">
            {c1 && <TrafficNav title="대분류"
                category={c1}
                sel={selC1}
                setSel={setSelC1} />
            }
            {c2 && <TrafficNav title="중분류"
                category={c2}
                sel={selC2}
                setSel={setSelC2} />
            }
            <div className="w-full flex font-bold gird grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">{info}</div>
        </div>
    )
}
