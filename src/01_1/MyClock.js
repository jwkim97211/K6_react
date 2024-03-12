import MyClockImage from "./MyClockImage"
import MyClockTime from "./MyClockTime"

function MyClock() {
    return (
        <div style={{ backgroundColor: "black", width: "60%" ,height:"50vh"}}>
            <MyClockImage />
            <MyClockTime />
        </div>
    )
}
export default MyClock