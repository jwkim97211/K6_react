import React, { useState } from 'react'
import img from './subway.PNG'
import ImageMapper from 'react-image-mapper'

export default function MainPage() {

const[show,setShow] = useState(false)
const [clickedArea, setClickedArea] = useState(null);

    const MAP = {
        name:'map',
        areas:[
            {id:'다대포해수욕장', shape:'rect', coords:[149,707,226,727], fillColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0},
            {id:'다대포항', shape:'rect', coords:[128,688,180,706], fillColor: 'rgba(0, 0, 0, 0)', strokeWidth: 0}
        ]
    }

    const handleClick=(area)=>{
        setClickedArea(area);
        setShow(true)
    }

    const handleClose = () =>{
        setShow(false)
    }

  return (
    <div>
    <ImageMapper src={img} map={MAP} width={1072} height={779} onClick={handleClick} />
    {show && (
        <div>
            <img src={`./busan/${clickedArea.id}.gif`} alt="station_img" />
            <table>
                    <tr>
                        <th>제목</th>
                    </tr>
                    <tr>
                        <td>내용</td>
                    </tr>
            </table>
            <button className='bg-slate-400' onClick={handleClose}>닫기</button>
        </div>
    )}
</div>
  )
}