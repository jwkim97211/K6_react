import BoxOfficetbody from "./BoxOfficetbody";
import BoxOfficethead from "./BoxOfficethead";
import BoxOfficeinfo from "./BoxOfficeinfo";
import Data from './BoxOffice.json'
import { useState } from 'react'

export default function BoxOffice() {

  const movielist = Data.boxOfficeResult.dailyBoxOfficeList
  const [str, setStr] = useState()

  return (
    <div className='w-full flex items-center justify-center flex-col'>
      <table className='w-4/5'>
        <BoxOfficethead />
        <BoxOfficetbody movielist={movielist} setStr={setStr}/>
      </table>
      <BoxOfficeinfo str={str}/>
    </div >
  )
}
