import { useEffect, useState } from 'react';
import img from './subway.png';
import ImageMapper from 'react-img-mapper';

export default function Facilities() {
    const STATIONS = [
        {
            name: 'station1',
            areas: [
                { id: '다대포해수욕장', shape: 'circle', coords: [73, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '다대포항', shape: 'circle', coords: [108, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '낫개', shape: 'circle', coords: [143, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '신장림', shape: 'circle', coords: [175, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '장림', shape: 'circle', coords: [208, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '동매', shape: 'circle', coords: [242, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '신평', shape: 'circle', coords: [275, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '하단', shape: 'circle', coords: [310, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '당리', shape: 'circle', coords: [343, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '사하', shape: 'circle', coords: [376, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '괴정', shape: 'circle', coords: [410, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '대티', shape: 'circle', coords: [444, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '서대신', shape: 'circle', coords: [477, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '동대신', shape: 'circle', coords: [510, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '토성', shape: 'circle', coords: [545, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '자갈치', shape: 'circle', coords: [577, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '남포', shape: 'circle', coords: [612, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '중앙', shape: 'circle', coords: [645, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '부산', shape: 'circle', coords: [678, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '초량', shape: 'circle', coords: [712, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '부산진', shape: 'circle', coords: [746, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '좌천', shape: 'circle', coords: [780, 528, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '범일', shape: 'circle', coords: [809, 509, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '범내골', shape: 'circle', coords: [809, 474, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '서면', shape: 'circle', coords: [809, 438, 8], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '부전', shape: 'circle', coords: [809, 395, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '양정', shape: 'circle', coords: [809, 354, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '시청', shape: 'circle', coords: [809, 312, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '연산', shape: 'circle', coords: [809, 274, 8], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '교대', shape: 'circle', coords: [809, 214, 8], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '동래', shape: 'circle', coords: [809, 146, 8], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '명륜', shape: 'circle', coords: [847, 71, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '온천장', shape: 'circle', coords: [918, 71, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '부산대', shape: 'circle', coords: [990, 71, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '장전', shape: 'circle', coords: [1061, 71, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '구서', shape: 'circle', coords: [1133, 71, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '두실', shape: 'circle', coords: [1206, 71, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '남산', shape: 'circle', coords: [1276, 71, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '범어사', shape: 'circle', coords: [1349, 71, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '노포', shape: 'circle', coords: [1418, 71, 5], station: '1', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 }
            ]
        },
        {
            name: 'station2',
            areas: [
                { id: '장산', shape: 'circle', coords: [1421, 275, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '중동', shape: 'circle', coords: [1372, 275, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '해운대', shape: 'circle', coords: [1328, 275, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '동백', shape: 'circle', coords: [1283, 275, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '벡스코', shape: 'circle', coords: [1231, 275, 8], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '센텀시티', shape: 'circle', coords: [1176, 275, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '민락', shape: 'circle', coords: [1117, 275, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '수영', shape: 'circle', coords: [1060, 275, 8], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '광안', shape: 'circle', coords: [1044, 318, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '금련산', shape: 'circle', coords: [1044, 353, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '남천', shape: 'circle', coords: [1044, 388, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '경성대부경대', shape: 'circle', coords: [1044, 422, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '대연', shape: 'circle', coords: [1010, 437, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '못골', shape: 'circle', coords: [979, 437, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '지게골', shape: 'circle', coords: [951, 437, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '문현', shape: 'circle', coords: [918, 437, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '국제금융센터부산은행', shape: 'circle', coords: [887, 437, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '전포', shape: 'circle', coords: [855, 437, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '부암', shape: 'circle', coords: [763, 437, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '가야', shape: 'circle', coords: [720, 437, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '동의대', shape: 'circle', coords: [676, 437, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '개금', shape: 'circle', coords: [635, 437, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '냉정', shape: 'circle', coords: [590, 437, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '주례', shape: 'circle', coords: [547, 437, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '감전', shape: 'circle', coords: [504, 437, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '사상', shape: 'circle', coords: [454, 437, 8], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '덕포', shape: 'circle', coords: [430, 413, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '모덕', shape: 'circle', coords: [430, 387, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '모라', shape: 'circle', coords: [430, 358, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '구남', shape: 'circle', coords: [430, 330, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '구명', shape: 'circle', coords: [430, 300, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '덕천', shape: 'circle', coords: [430, 274, 8], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '수정', shape: 'circle', coords: [430, 216, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '화명', shape: 'circle', coords: [430, 164, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '율리', shape: 'circle', coords: [430, 114, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '동원', shape: 'circle', coords: [444, 71, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '금곡', shape: 'circle', coords: [493, 71, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '호포', shape: 'circle', coords: [541, 71, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '증산', shape: 'circle', coords: [589, 71, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '부산대양산캠퍼스', shape: 'circle', coords: [636, 71, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '남양산', shape: 'circle', coords: [684, 71, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '양산', shape: 'circle', coords: [730, 70, 4], station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 }
            ]
        },
        {
            name: 'station3',
            areas: [
                { id: '대저', shape: 'circle', coords: [72, 274, 8], station: '3', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '체육공원', shape: 'circle', coords: [163, 274, 4], station: '3', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '강서구청', shape: 'circle', coords: [253, 275, 4], station: '3', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '구포', shape: 'circle', coords: [342, 274, 4], station: '3', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '숙등', shape: 'circle', coords: [489, 274, 4], station: '3', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '남산정', shape: 'circle', coords: [533, 274, 4], station: '3', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '만덕', shape: 'circle', coords: [579, 274, 4], station: '3', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '미남', shape: 'circle', coords: [612, 274, 8], station: '3', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '사직', shape: 'circle', coords: [660, 274, 4], station: '3', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '종합운동장', shape: 'circle', coords: [697, 274, 4], station: '3', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '거제', shape: 'circle', coords: [742, 274, 8], station: '3', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '물만골', shape: 'circle', coords: [869, 274, 4], station: '3', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '배산', shape: 'circle', coords: [925, 274, 4], station: '3', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '망미', shape: 'circle', coords: [980, 274, 4], station: '3', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 }
            ]
        },
        {
            name: 'station4',
            areas: [
                { id: '안평', shape: 'circle', coords: [1421, 147, 4], station: '4', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '고촌', shape: 'circle', coords: [1369, 147, 4], station: '4', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '윗반송', shape: 'circle', coords: [1319, 147, 4], station: '4', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '영산대', shape: 'circle', coords: [1269, 147, 4], station: '4', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '석대', shape: 'circle', coords: [1218, 147, 4], station: '4', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '반여농산물시장', shape: 'circle', coords: [1168, 147, 4], station: '4', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '금사', shape: 'circle', coords: [1117, 147, 4], station: '4', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '서동', shape: 'circle', coords: [1067, 147, 4], station: '4', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '명장', shape: 'circle', coords: [1016, 147, 4], station: '4', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '충렬사', shape: 'circle', coords: [965, 147, 4], station: '4', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '낙민', shape: 'circle', coords: [912, 147, 4], station: '4', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '수안', shape: 'circle', coords: [864, 147, 4], station: '4', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 }
            ]
        }
    ];

    const combinedAreas = STATIONS.flatMap(station => station.areas);

    const MAP = {
        name: "combined-map",
        areas: combinedAreas
    };

    const [adata, setAData] = useState()
    const [areaSt, setAreaSt] = useState()

    const getData = async (url) => {
        const resp = await fetch(url) ;
        const data = await resp.json()  ;
        setAData(data) ;
    }

    const handleClick = (area) => {
        setAreaSt(area);
        let url = `http://10.125.121.200:8080/getLocation?stationName=${area.id}`
        getData(url);
    };

    useEffect(() => {
        if (!adata) return;
        openNewWindow(areaSt);
        console.log("adata", adata)
    }, [adata]);

    const createTable = (locData) => {
        return `
            <table style="width: 100%; font-size: 0.875rem; text-align: left; color: #6b7280; border-collapse: collapse; border: 1px solid #e5e7eb;">
                <thead style="font-size: 0.75rem; text-transform: uppercase; color: #374151; background-color: #f9fafb;">
                    <tr>
                        <th scope="col" style="padding: 12px 24px; border-bottom: 1px solid #e5e7eb;"></th>
                        <th scope="col" style="padding: 12px 24px; border-bottom: 1px solid #e5e7eb; text-align: center;">위치</th>

                    </tr>
                </thead>
                ${locData.map((loc, index) => `
                    <tr style="background-color: white;">
                        <td style="padding: 16px 24px; border-bottom: 1px solid #e5e7eb;">${index + 1}</td>
                        <td style="padding: 16px 24px; border-bottom: 1px solid #e5e7eb;">${loc}</td>
                    </tr>
                `).join('')}
            </table>`;
    };

    const openNewWindow = (area) => {
        if (!adata) return;
        const width = 1200;
        const height = 800;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;

        const newWindow = window.open("", "_blank", `width=${width},height=${height},left=${left},top=${top}`);
        const htmlContent = `
            <html>
                <head>
                    <title>${area.id}역</title>
                </head>
                <body>
                    <img src="./busan/10/${area.id}.gif" alt="${area.id}" width="1200px" height="550px"/>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 20px; margin-top:10px">
                            <div style="text-align: center; margin-right: 10px; margin-left: 5px; width: 20%;">
                                <img src="./busan/elevator.png" alt="elevator" width="50px" height="50px" />
                                <span style="display: block; margin-top: 5px; font-size: 0.875rem; text-align: center; color: #6b7280;">엘리베이터</span>
                                ${createTable(adata.elevatorLoc.split("|"))}
                            </div>
                            <div style="text-align: center; margin-right: 10px; width: 20%;">
                                <img src="./busan/escalator.png" alt="escalator" width="50px" height="50px" />
                                <span style="display: block; margin-top: 5px; font-size: 0.875rem; text-align: center; color: #6b7280;">에스컬레이터</span>
                                ${createTable(adata.escalatorLoc.split("|"))}
                            </div>
                            <div style="text-align: center; margin-right: 10px; width: 20%;">
                                <img src="./busan/locker.png" alt="locker" width="50px" height="50px" />
                                <span style="display: block; margin-top: 5px; font-size: 0.875rem; text-align: center; color: #6b7280;">물품보관함</span>
                                ${createTable(adata.lockerLoc.split("|"))}
                            </div>
                            <div style="text-align: center; margin-right: 10px; width: 20%;">
                                <img src="./busan/toilet.png" alt="toilet" width="50px" height="50px" />
                                <span style="display: block; margin-top: 5px; font-size: 0.875rem; text-align: center; color: #6b7280;">화장실</span>
                                ${createTable(adata.restroomLoc.split("|"))}
                            </div>
                            <div style="text-align: center; margin-right: 5px; width: 20%;">
                                <img src="./busan/telephone.png" alt="telephone" width="50px" height="50px" />
                                <span style="display: block; margin-top: 5px; font-size: 0.875rem; text-align: center; color: #6b7280;">고객센터</span>
                                ${createTable(adata.cscenterLoc.split("|"))}
                            </div>
                        </div>
                </body>
            </html>`;
        newWindow.document.write(htmlContent);
        newWindow.document.close();
    };

    return (
        <div>
            <ImageMapper
                src={img}
                map={MAP}
                width={1500}
                height={544}
                onClick={handleClick}
            />
        </div>
    );
};