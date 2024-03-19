export default function BoxOfficethead() {
    return (
        <thead>
            <tr className='text-center bg-blue-300 text-white h-10'>
                <th className='w-10'>순위</th>
                <th>영화명</th>
                <th>매출액</th>
                <th>관객수</th>
                <th className='w-20'>증감율</th>
            </tr>
        </thead>
    )
}
