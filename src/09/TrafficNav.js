import TailButton from '../UI/TailButton'

export default function TrafficNav({ title, category, sel, setSel }) {

    const handelBtClick = (item) => {
        setSel(item)
    }

    const bts = category.map(item =>
        <TailButton caption={item} color={item === sel ? "red" : "blue"} handleClick={() => handelBtClick(item)} key={item} />
    )

    return (
        <div className='w-11/12 flex justify-between items-center'>
            <h1 className='flex justify-center items-center font-bold text-xl'>
                교통사고 {title}
            </h1>
            <div>
                {bts}
            </div>
        </div>
    )
}
