import { useState, useEffect } from "react"


function MyClockTime() {
  const [currenttime, setCurrenttime] = useState(new Date())
  useEffect(() => {
    console.log(currenttime)
    const t = setInterval(() => {
      setCurrenttime(new Date());
    },1000);
    console.log("[]=>",currenttime)
    return ()=> {clearInterval(t)}
  },[]);

  return (
    <h1 className="font-bold text-2xl">
      {/* {time2.toLocalString()} */}
      {currenttime.toLocaleTimeString()}
    </h1>
  )
}
export default MyClockTime