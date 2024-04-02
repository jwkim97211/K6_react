import BoxOffice from './05/BoxOffice';
import Lotto from './06/Lotto';
import MyClock from './08/MyClock'
import FoodMain from './07/FoodMain';
import TrafficMain from './09/TrafficMain';
import GalleryMain from './11/GalleryMain';
import Festival from './12/Festival';
import Frsct from './14/Frsct';
import VilageFcst from './14/VilageFcst';
import UltraSrtFcst from './14/UltraSrtFcst';

import './App.css';
import { AiOutlineHome } from "react-icons/ai";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


function App() {

  return (  //return되는 것은 밖에 있는 div 하나뿐. <>=fragment태그 여라가지 태그를 반화하고 싶을 때 사용
    <BrowserRouter>
      <div className='flex flex-col w-full max-w-screen-xl h-screen mx-auto overscroll-y-auto'>
        <header className='flex justify-between h-20 items-center p-10 font-bold text-xl bg-blue-950 text-white'>
          <div>
            react 실습
          </div>
          <div className='flex justify-end items-center mx-2'>
            <div className='mx-5 p-2'>
              <Link to='/lotto' className='mx-3'>로또</Link>
              <Link to='/boxoffice'className='mx-3'>영화</Link>
              <Link to='/foodmarket'className='mx-3'>푸드마켓</Link>
              <Link to='/gallery'className='mx-3'>사진</Link>
              <Link to='/festival'className='mx-3'>축제</Link>
              <Link to='/traffic'className='mx-3'>교통</Link>
              <Link to='/weather'className='mx-3'>예보</Link>
            </div>
            <Link to='/'><AiOutlineHome className='text-3xl' /></Link>
          </div>
        </header>
        <main className='grow flex flex-col justify-center items-center'>
          <Routes>
            <Route path='/' element={<MyClock />} />
            <Route path='/lotto' element={<Lotto />} />
            <Route path='/boxoffice' element={<BoxOffice />} />
            <Route path='/foodmarket' element={<FoodMain />} />
            <Route path='/gallery' element={<GalleryMain />} />
            <Route path='/festival' element={<Festival />} />
            <Route path='/traffic' element={<TrafficMain />} />
            <Route path='/weather' element={<Frsct />} />
            <Route path='/ultra/:dt/:area/:x/:y' element={<UltraSrtFcst />} />
            <Route path='/vilage/:dt/:area/:x/:y' element={<VilageFcst />} />
          </Routes>
        </main>
        <footer className='flex justify-center items-center bg-blue-950 h-20 text-white'>
          &copy;2024 KimJeongWon. All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
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
