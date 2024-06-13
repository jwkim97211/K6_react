import React from 'react'
import { useState, useEffect, useRef } from "react"

export default function Screen() {
    const [time, setTime] = useState(new Date())
    const [firstData, setFirstData] = useState();
    const [showPlat, setShowPlat] = useState(false);
    const [conf, setConf] = useState([]);
    const opt1Ref = useRef();

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('. ');
        return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;
    }

    const formatTime = (dateString) => {
        const hour = dateString.split(":")[0];
        return `${hour}시`;
    }

    const formatNum = (dateString) => {
        const [year, month, day] = dateString.replace(".", "").split(" ");
        let formattedMonth = parseInt(month);
        let formattedDay = parseInt(day);
        if (formattedMonth < 10) {
            formattedMonth = '0' + formattedMonth;
        }
        if (formattedDay < 10) {
            formattedDay = '0' + formattedDay;
        }
        return `${year}${formattedMonth}${formattedDay}`;
    }

    useEffect(() => {
        const t = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => { clearInterval(t); };
    }, []);

    const hour = time.getHours();
    const formattedHour = hour <= 10 ? '0' + (hour - 1) : (hour === 12 ? '11' : hour - 1);
    const formattedDate = time.toLocaleDateString();
    const formattedTime = time.toLocaleTimeString();

    useEffect(() => {
        console.log("data", firstData);
        console.log("date", formattedDate);
        console.log("num", formatNum(formattedDate));
        console.log("time", formattedHour);
    }, [firstData]);

    const handleTime = () => {
        let url = `https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation`;
        url = `${url}?serviceKey=${process.env.REACT_APP_APIKEY}`;
        url = `${url}&resultType=json&controlnumber=${formatNum(formattedDate)}${formattedHour}`;
        url = `${url}&areaIndex=${opt1Ref.current.value}`;
        console.log(url);

        fetch(url)
            .then(resp => resp.json())
            .then(data => setFirstData(data.getIndoorAirQualityByStation.body.items.item[0]))
            .catch(err => console.log(err));

        let num = [];
        while (num.length < 8) {
            let n = Math.floor(Math.random() * 16);
            num.push(n);
        }

        const confuse = num.map((item, index) => {
            let bgColor;
            let text;
            if (item >= 0 && item <= 4) {
                bgColor = 'bg-red-500';
                text = '혼잡';
            } else if (item >= 5 && item <= 9) {
                bgColor = 'bg-yellow-400';
                text = '보통';
            } else if (item >= 10 && item <= 15) {
                bgColor = 'bg-green-500';
                text = '여유';
            }
            return (
                <div className="flex flex-col items-center " key={index}>
                    <div className={`${bgColor} text-black p-2 w-20 rounded-lg mb-1 text-center`}>
                        {text}
                    </div>
                    <div className="text-2xl">{item}</div>
                </div>
            );
        });
        setConf(confuse);
        if (!firstData) return;
        setShowPlat(true);
    }

    const getPM25ColorClass = (pm25) => {
        if (pm25 <= 15) return 'text-blue-500';
        if (pm25 <= 35) return 'text-green-500';
        if (pm25 <= 75) return 'text-yellow-300';
        return 'text-white';
    };

    const getCO2ColorClass = (co2) => {
        if (co2 <= 450) return 'text-blue-500';
        if (co2 <= 1000) return 'text-green-500';
        return 'text-white'
    };

    const getPM25Description = (pm25) => {
        if (pm25 <= 15) return '좋음';
        if (pm25 <= 35) return '보통';
        return '나쁨';
    };

    const getCO2Description = (co2) => {
        if (co2 <= 450) return '좋음';
        return '보통';
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className='flex justify-center mt-4'>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">승강장을 선택하세요.</label>
                    <select
                        ref={opt1Ref}
                        onChange={handleTime}
                        className="bg-gray-50 border w-40 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                    >
                        <option value="">승강장 선택</option>
                        <option value="201193">서면역 1호선 승강장</option>
                        <option value="202192">서면역 2호선 승강장</option>
                        <option value="202271">사상역 대합실</option>
                        <option value="203011">수영역 대합실</option>
                        <option value="203051">연산역 대합실</option>
                        <option value="203091">미남역 대합실</option>
                        <option value="203131">덕천역 대합실</option>
                        <option value="204021">동래역 4호선 대합실</option>
                        <option value="201111">남포역 대합실</option>
                        <option value="201191">서면역 1호선 대합실</option>
                    </select>
                </div>
            </div>
            {showPlat && (
                <div className="flex flex-col items-center mt-8">
                    <div className="bg-black text-black rounded-lg p-4 flex">
                        <div className="text-white p-4 w-1/4">
                            <div className="text-green-500 text-2xl mb-2 text-center">{formatDate(formattedDate)}</div>
                            <div className="text-yellow-300 text-xl mb-4 text-center">{formattedTime}</div>
                            <div className="text-center text-sm">
                                <div className="mb-2">{opt1Ref.current?.options[opt1Ref.current.selectedIndex].text}</div>
                                <div className="mb-2">{formatDate(formattedDate)} {formatTime(formattedTime)} 기준</div>
                                <div className="mt-4 flex justify-around">
                                    <div className="text-center">
                                        <div className="text-sm">초미세먼지(PM2.5)<br />1시간 평균</div>
                                        <div className={`text-2xl ${getPM25ColorClass(firstData?.pm25)}`}>
                                            {firstData?.pm25}µg/m³ <span className="text-white">/</span> {getPM25Description(firstData?.pm25)}
                                        </div>
                                        <div className="text-sm mt-2">이산화탄소(CO2)<br />1시간 평균</div>
                                        <div className={`text-2xl ${getCO2ColorClass(firstData?.co2)}`}>
                                            {firstData?.co2}ppm <span className="text-white">/</span> {getCO2Description(firstData?.co2)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-orange-400 text-black p-4 rounded-lg w-3/4 flex flex-col justify-center items-center">
                            <div className="text-6xl font-bold text-center mb-2">The train bound for</div>
                            <div className="text-6xl font-bold text-center mb-2 bg-black text-white p-2 rounded-lg">Dadaepo Beach</div>
                            <div className="text-6xl font-bold text-center mb-4">just arrived</div>
                        </div>
                    </div>

                    <div className="bg-black font-bold text-white mt-4 p-2 rounded-lg flex justify-around">
                        {conf}
                    </div>
                </div>
            )}
        </div>
    );
}
