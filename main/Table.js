import React, { useEffect, useState } from 'react';

export default function Table() {
    const [fac, setFac] = useState();

    const getData = async (url) => {
        const resp = await fetch(url);
        const data = await resp.json();
        setFac(data);
    }

    useEffect(() => {
        let url = `http://10.125.121.200:8080/getLocation?stationName=서면`;
        getData(url);
    }, []);

    useEffect(() => {
        console.log("fac", fac);
    }, [fac]);

    if (!fac) return null;

    return (
        <div className='bg-slate-100 bg-opacity-80 w-2/3 p-2 rounded-xl mt-4 mb-3 ml-3 mr-3'>
            <table className="w-full text-sm text-gray-600 rounded-xl">
                <thead className="bg-gray-100 text-xs text-gray-700">
                    <tr>
                        <th className="py-2 px-4 text-center">Elevator</th>
                        <th className="py-2 px-4 text-center">Escalator</th>
                        <th className="py-2 px-4 text-center">Locker</th>
                        <th className="py-2 px-4 text-center">Restroom</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-4 px-6">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
