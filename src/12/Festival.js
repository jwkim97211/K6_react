import { useRef, useState, useEffect } from "react"
import GalleryCard from "./GalleryCard"

export default function Festival() {

    const [guname, setGuname] = useState([])
    const [tdata, setTdata] = useState([])
    const [box, setBox] = useState([])
    const [tags, setTags] = useState([])

    const selref = useRef()


    const getData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.getFestivalKr.item))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        let url = "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?"
        url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}&`
        url = `${url}pageNo=1&numOfRows=40&resultType=json`

        console.log(url)
        getData(url)
    }, [])

    useEffect(() => {
        let tm = tdata.map(item => item["GUGUN_NM"]);
        tm = new Set(tm);
        tm = [...tm];
        setGuname(tm)
    }, [tdata])

    useEffect(() => {
        const tm = guname.map(item =>
            <option key={item}>{item}</option>
        )
        setBox(tm)
    }, [guname])

    const handleSelGu = () => {
        let tm = tdata.filter(item => item["GUGUN_NM"] === selref.current.value).map(item =>
            <GalleryCard imgUrl={item["MAIN_IMG_NORMAL"]}
                title={item["TITLE"]}
                ptitle={item["TRFC_INFO"]}
                ktag={item["USAGE_DAY_WEEK_AND_TIME"]}
                key={item["UC_SEQ"]} />
        )
        setTags(tm)
    }

    return (
        <div className="w-full h-full flex flex-col
        justify-start items-center">
            <form className="w-3/5 mx-auto flex
          mt-10
          justify-center items-center">
                <label htmlFor="gu"
                    className="w-1/3 block mb-2 text-lg 
              font-bold text-gray-900">부산축제 정보 선택</label>
                <select id="gu"
                    onChange={handleSelGu}
                    ref={selref}
                    className="w-2/3 bg-gray-50 border
               border-gray-300 text-gray-900 text-sm 
               rounded-lg
                focus:ring-blue-500 focus:border-blue-500 
                block p-2.5">
                    <option defaultValue>구를 선택하세요.</option>
                    {box}
                </select>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-5">
                {tags}
            </div>
        </div>
    )
}

