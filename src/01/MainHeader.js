import logo from '../logo.svg';
function MainHeader() {
    return (    //ClassName이 개발자모드에서는 class로 변경됨(jxs문법)
        <header className="App-header"> 
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}
export default MainHeader;