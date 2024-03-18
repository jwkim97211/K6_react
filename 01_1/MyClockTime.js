function MyClockTime() {
  const time = new Date()

  return (
    <h3><span style={{ color: "white", display: "flex", justifyContent: "center"}}>현재시각 : {time.toLocaleTimeString()}
    </span></h3>
  )
}
export default MyClockTime