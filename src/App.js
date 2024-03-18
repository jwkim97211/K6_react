// import MyDiv1 from './03_1/MyDiv1';
// import MyList from './04/MyList';
// import MyListMain from './04/MyListMain';
import BoxOfficeMain from './05/BoxOfficeMain';
import './App.css';
// import MainHeader from './01/MainHeader';
// import Hello from './01/Hello';
// import MyClock from './01_1/MyClock';
// import HelloC from './02/HelloC';
import { AiOutlineHome } from "react-icons/ai";

function App() {
  return (  //return되는 것은 밖에 있는 div 하나뿐. <>=fragment태그 여라가지 태그를 반화하고 싶을 때 사용
    <>
      <div className='flex flex-col w-full max-w-screen-xl h-screen mx-auto overscroll-y-auto'>
        <header className='flex justify-between h-20 items-center p-10 font-bold text-xl bg-blue-950 h-20 text-white'>
          <div>
            react 실습
          </div>
          <div>
          <AiOutlineHome className='text-3xl'/>
          </div>
        </header>
        <main className='grow flex flex-col justify-center items-center'>
          {/* <HelloC /> */}
          {/* <MyDiv1 /> */}
          {/* <MyListMain /> */}
          <BoxOfficeMain />
        </main>
        <footer className='flex justify-center items-center bg-blue-950 h-20 text-white'>
          &copy;2024 KimJeongWon. All rights reserved.
        </footer>
      </div>
    </>
  );
}
//화살표 함수로 작성가능
//const App =()=>{
//  return();
//}
export default App;
//export default App; 반드시 있어야 함
//모듈형 함수이기 때문에 export로 내보내줘야
//import해서 사용가능
