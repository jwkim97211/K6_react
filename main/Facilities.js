import { useEffect, useState } from 'react';
import img from './subway.png';
import ImageMapper from 'react-img-mapper';

export default function Facilities() {
    const STATIONS = [
        {
            name: 'station1',
            areas: [
                { id: '다대포해수욕장', shape: 'circle', coords: [70.4498, 190.638, 15], station: '1', stid: 95, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '다대포항', shape: 'circle', coords: [124.45, 190.638, 15], station: '1', stid: 96, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '낫개', shape: 'circle', coords: [178.45, 190.638, 15], station: '1', stid: 97, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '신장림', shape: 'circle', coords: [232.45, 190.638, 15], station: '1', stid: 98, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '장림', shape: 'circle', coords: [286.45, 190.638, 15], station: '1', stid: 99, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '동매', shape: 'circle', coords: [340.45, 190.638, 15], station: '1', stid: 100, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '신평', shape: 'circle', coords: [394.45, 190.638, 15], station: '1', stid: 101, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '하단', shape: 'circle', coords: [448.45, 190.638, 15], station: '1', stid: 102, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '당리', shape: 'circle', coords: [502.45, 190.638, 15], station: '1', stid: 103, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '사하', shape: 'circle', coords: [502.45, 245.638, 15], station: '1', stid: 104, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '괴정', shape: 'circle', coords: [502.45, 300.638, 15], station: '1', stid: 105, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '대티', shape: 'circle', coords: [502.45, 355.638, 15], station: '1', stid: 106, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '서대신', shape: 'circle', coords: [502.45, 410.638, 15], station: '1', stid: 107, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '동대신', shape: 'circle', coords: [502.45, 465.638, 15], station: '1', stid: 108, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '토성', shape: 'circle', coords: [502.45, 520.638, 15], station: '1', stid: 109, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '자갈치', shape: 'circle', coords: [502.45, 576.638, 15], station: '1', stid: 110, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '남포', shape: 'circle', coords: [563.45, 576.638, 15], station: '1', stid: 111, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '중앙', shape: 'circle', coords: [622.45, 576.638, 15], station: '1', stid: 112, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '부산', shape: 'circle', coords: [679.45, 576.638, 15], station: '1', stid: 113, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '초량', shape: 'circle', coords: [738.45, 576.638, 15], station: '1', stid: 114, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '부산진', shape: 'circle', coords: [798.45, 576.638, 15], station: '1', stid: 115, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '좌천', shape: 'circle', coords: [858.45, 576.638, 15], station: '1', stid: 116, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '범일', shape: 'circle', coords: [918.45, 576.638, 15], station: '1', stid: 117, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '범내골', shape: 'circle', coords: [978.45, 576.638, 15], station: '1', stid: 118, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '서면', shape: 'circle', coords: [1039.45, 577.638, 15], station: '1', stid: 119, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '부전', shape: 'circle', coords: [1114.45, 576.638, 15], station: '1', stid: 120, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '양정', shape: 'circle', coords: [1189.45, 576.638, 15], station: '1', stid: 121, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '시청', shape: 'circle', coords: [1264.45, 576.638, 15], station: '1', stid: 122, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '연산', shape: 'circle', coords: [1341.45, 577.638, 15], station: '1', stid: 123, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '교대', shape: 'circle', coords: [1460.45, 576.638, 15], station: '1', stid: 124, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '동래', shape: 'circle', coords: [1582.45, 577.638, 15], station: '1', stid: 125, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '명륜', shape: 'circle', coords: [1649.45, 576.638, 15], station: '1', stid: 126, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '온천장', shape: 'circle', coords: [1729.45, 576.638, 15], station: '1', stid: 127, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '부산대', shape: 'circle', coords: [1809.45, 576.638, 15], station: '1', stid: 128, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '장전', shape: 'circle', coords: [1889.45, 576.638, 15], station: '1', stid: 129, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '구서', shape: 'circle', coords: [1970.45, 576.638, 15], station: '1', stid: 130, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '두실', shape: 'circle', coords: [2051.45, 576.638, 15], station: '1', stid: 131, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '남산', shape: 'circle', coords: [2132.45, 576.638, 15], station: '1', stid: 132, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '범어사', shape: 'circle', coords: [2213.45, 576.638, 15], station: '1', stid: 133, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '노포', shape: 'circle', coords: [2294.45, 576.638, 15], station: '1', stid: 134, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 }
            ]
        },
        {
            name: 'station2',
            areas: [
                { id: '장산', shape: 'circle', coords: [1857.45, 942.638, 15], station: '2', stid: 201, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '중동', shape: 'circle', coords: [1781.45, 942.638, 15], station: '2', stid: 202, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '해운대', shape: 'circle', coords: [1705.45, 942.638, 15], station: '2', stid: 203, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '동백', shape: 'circle', coords: [1629.45, 942.638, 15], station: '2', stid: 204, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '벡스코', shape: 'circle', coords: [1555.45, 942.638, 15], station: '2', stid: 205, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '센텀시티', shape: 'circle', coords: [1479.45, 942.638, 15], station: '2', stid: 206, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '민락', shape: 'circle', coords: [1405.45, 942.638, 15], station: '2', stid: 207, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '수영', shape: 'circle', coords: [1340.45, 941.638, 15], station: '2', stid: 208, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '광안', shape: 'circle', coords: [1291.45, 942.638, 15], station: '2', stid: 209, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '금련산', shape: 'circle', coords: [1228.45, 942.638, 15], station: '2', stid: 210, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '남천', shape: 'circle', coords: [1165.45, 942.638, 15], station: '2', stid: 211, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '경성대부경대', shape: 'circle', coords: [1102.45, 942.638, 15], station: '2', stid: 212, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '대연', shape: 'circle', coords: [1038.45, 942.638, 15], station: '2', stid: 213, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '못골', shape: 'circle', coords: [1038.45, 881.638, 15], station: '2', stid: 214, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '지게골', shape: 'circle', coords: [1039.45, 819.638, 15], station: '2', stid: 215, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '문현', shape: 'circle', coords: [1039.45, 757.638, 15], station: '2', stid: 216, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '국제금융센터부산은행', shape: 'circle', coords: [1039.45, 695.638, 15], stid: 217, station: '2', strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '전포', shape: 'circle', coords: [1039.45, 633.638, 15], station: '2', stid: 218, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '부암', shape: 'circle', coords: [1039.45, 512.638, 15], station: '2', stid: 220, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '가야', shape: 'circle', coords: [1039.45, 453.638, 15], station: '2', stid: 221, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '동의대', shape: 'circle', coords: [1039.45, 394.638, 15], station: '2', stid: 222, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '개금', shape: 'circle', coords: [1039.45, 335.638, 15], station: '2', stid: 223, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '냉정', shape: 'circle', coords: [1039.45, 276.638, 15], station: '2', stid: 224, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '주례', shape: 'circle', coords: [1101.45, 276.638, 15], station: '2', stid: 225, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '감전', shape: 'circle', coords: [1163.45, 276.638, 15], station: '2', stid: 226, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '사상', shape: 'circle', coords: [1225.45, 276.638, 15], station: '2', stid: 227, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '덕포', shape: 'circle', coords: [1287.45, 276.638, 15], station: '2', stid: 228, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '모덕', shape: 'circle', coords: [1349.45, 276.638, 15], station: '2', stid: 229, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '모라', shape: 'circle', coords: [1411.45, 276.638, 15], station: '2', stid: 230, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '구남', shape: 'circle', coords: [1473.45, 276.638, 15], station: '2', stid: 231, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '구명', shape: 'circle', coords: [1535.45, 276.638, 15], station: '2', stid: 232, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '덕천', shape: 'circle', coords: [1582.45, 275.638, 15], station: '2', stid: 233, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '수정', shape: 'circle', coords: [1644.45, 276.638, 15], station: '2', stid: 234, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '화명', shape: 'circle', coords: [1712.45, 276.638, 15], station: '2', stid: 235, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '율리', shape: 'circle', coords: [1783.45, 276.638, 15], station: '2', stid: 236, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '동원', shape: 'circle', coords: [1852.45, 276.638, 15], station: '2', stid: 237, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '금곡', shape: 'circle', coords: [1923.45, 276.638, 15], station: '2', stid: 238, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '호포', shape: 'circle', coords: [1994.45, 276.638, 15], station: '2', stid: 239, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '증산', shape: 'circle', coords: [2065.45, 276.638, 15], station: '2', stid: 240, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '부산대양산캠퍼스', shape: 'circle', coords: [2136.45, 276.638, 15], station: '2', stid: 241, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '남양산', shape: 'circle', coords: [2207.45, 276.638, 15], station: '2', stid: 242, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '양산', shape: 'circle', coords: [2278.45, 276.638, 15], station: '2', stid: 243, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 }
            ]
        },
        {
            name: 'station3',
            areas: [
                { id: '대저', shape: 'circle', coords: [1582.45, 76.6384, 15], station: '3', stid: 317, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '체육공원', shape: 'circle', coords: [1582.45, 125.638, 15], station: '3', stid: 316, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '강서구청', shape: 'circle', coords: [1582.45, 174.638, 15], station: '3', stid: 315, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '구포', shape: 'circle', coords: [1582.45, 224.638, 15], station: '3', stid: 314, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '숙등', shape: 'circle', coords: [1582.45, 325.638, 15], station: '3', stid: 312, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '남산정', shape: 'circle', coords: [1582.45, 374.638, 15], station: '3', stid: 311, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '만덕', shape: 'circle', coords: [1582.45, 423.638, 15], station: '3', stid: 310, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '미남', shape: 'circle', coords: [1582.45, 483.638, 15], station: '3', stid: 309, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '사직', shape: 'circle', coords: [1507.45, 483.638, 15], station: '3', stid: 308, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '종합운동장', shape: 'circle', coords: [1425.45, 483.638, 15], station: '3', stid: 307, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '거제', shape: 'circle', coords: [1343.45, 483.638, 15], station: '3', stid: 306, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '물만골', shape: 'circle', coords: [1341.45, 668.638, 15], station: '3', stid: 304, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '배산', shape: 'circle', coords: [1341.45, 759.638, 15], station: '3', stid: 303, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '망미', shape: 'circle', coords: [1341.45, 850.638, 15], station: '3', stid: 302, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 }
            ]
        },
        {
            name: 'station4',
            areas: [
                { id: '안평', shape: 'circle', coords: [2239.45, 761.638, 15], station: '4', stid: 414, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '고촌', shape: 'circle', coords: [2166.45, 761.638, 15], station: '4', stid: 413, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '윗반송', shape: 'circle', coords: [2093.45, 761.638, 15], station: '4', stid: 412, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '영산대', shape: 'circle', coords: [2020.45, 761.638, 15], station: '4', stid: 411, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '석대', shape: 'circle', coords: [1947.45, 761.638, 15], station: '4', stid: 410, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '반여농산물시장', shape: 'circle', coords: [1874.45, 761.638, 15], station: '4', stid: 409, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '금사', shape: 'circle', coords: [1801.45, 761.638, 15], station: '4', stid: 408, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '서동', shape: 'circle', coords: [1728.45, 761.638, 15], station: '4', stid: 407, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '명장', shape: 'circle', coords: [1655.45, 761.638, 15], station: '4', stid: 406, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '충렬사', shape: 'circle', coords: [1582.45, 761.638, 15], station: '4', stid: 405, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '낙민', shape: 'circle', coords: [1582.45, 695.638, 15], station: '4', stid: 404, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 },
                { id: '수안', shape: 'circle', coords: [1582.45, 633.638, 15], station: '4', stid: 403, strokeColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0 }
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
        const resp = await fetch(url);
        const data = await resp.json();
        setAData(data);
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