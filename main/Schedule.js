import React, { useState, useRef, useEffect } from 'react';

export default function Schedule() {
    const [refData, setRefData] = useState([]);
    const [optData, setOptData] = useState([]);
    const [lastData, setLastData] = useState([]);
    const [directionOptions, setDirectionOptions] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const select1Ref = useRef();
    const select2Ref = useRef();
    const select3Ref = useRef();
    const select4Ref = useRef();

    const getData = async (url) => {
        const resp = await fetch(url);
        const data = await resp.json();
        setRefData(data);
    }

    useEffect(() => {
        let url = "http://10.125.121.200:8080/getLocList"
        getData(url);
    }, [])

    const handleSelect = () => {
        const selectedLine = select1Ref.current.value;

        let tm = refData.filter(item => item['line'] === selectedLine)
            .map((item) => (
                <option key={item['stationName']} value={item['stationName']}>
                    {item['stationName']}
                </option>
            ));
        setOptData(tm);

        let directionOpts = [];
        if (selectedLine === "1호선") {
            directionOpts = [
                { value: "다대포해수욕장", label: "다대포해수욕장행" },
                { value: "노포", label: "노포행" }
            ];
        } else if (selectedLine === "2호선") {
            directionOpts = [
                { value: "양산", label: "양산행" },
                { value: "장산", label: "장산행" }
            ];
        } else if (selectedLine === "3호선") {
            directionOpts = [
                { value: "대저", label: "대저행" },
                { value: "수영", label: "수영행" }
            ];
        } else if (selectedLine === "4호선") {
            directionOpts = [
                { value: "안평", label: "안평행" },
                { value: "미남", label: "미남행" }
            ];
        }
        setDirectionOptions(directionOpts);
    }

    const search = async () => {
        const selectLine = select1Ref.current.value;
        const selectStation = select2Ref.current.value;
        const selectDayType = select3Ref.current.value;
        const selectDirection = select4Ref.current.value;

        let url = `http://10.125.121.200:8080/getArrivalTime?line=${selectLine}&stationName=${selectStation}&dayType=${selectDayType}&endingSt=${selectDirection}`

        const resp = await fetch(url);
        const data = await resp.json();
        setLastData(data);
    };

    useEffect(() => {
        console.log(lastData)
        setShowTable(true);
    }, [lastData])

    return (
        <div className="flex items-center">
            <form className="max-w-sm mb-4 mr-4 flex">
                <div className="mr-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900">호선을 선택하세요.</label>
                    <select
                        ref={select1Ref}
                        onChange={handleSelect}
                        className="bg-gray-50 border w-40 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                    >
                        <option value="">호선 선택</option>
                        <option value="1호선">1호선</option>
                        <option value="2호선">2호선</option>
                        <option value="3호선">3호선</option>
                        <option value="4호선">4호선</option>
                    </select>
                </div>
                <div className="mr-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900">역을 선택하세요.</label>
                    <select ref={select2Ref} className="bg-gray-50 border border-gray-300 text-gray-900 w-40 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        <option value="">역 선택</option>
                        {optData}
                    </select>
                </div>
                <div className="mr-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900">요일을 선택하세요.</label>
                    <select ref={select3Ref} className="bg-gray-50 border border-gray-300 text-gray-900 w-40 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        <option value="">요일 선택</option>
                        <option value="평일">평일</option>
                        <option value="토요일">토요일</option>
                        <option value="일요일">일요일</option>
                        <option value="공휴일">공휴일</option>
                    </select>
                </div>
                <div className="mr-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900">방향을 선택하세요.</label>
                    <select ref={select4Ref} className="bg-gray-50 border border-gray-300 text-gray-900 w-40 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        <option value="">방향 선택</option>
                        {directionOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="button"
                    onClick={search}
                    className="text-gray-900 bg-gray-50 w-60 border border-gray-300 hover:bg-gray-100 font-medium rounded text-sm px-4 py-2.5">
                    검색
                </button>
            </form>
            {/* {showTable && (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500">시간</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500">분</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )} */}
        </div>
    );
}