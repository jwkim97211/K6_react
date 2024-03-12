import './App.css';
import MainHeader from './01/MainHeader';
import Hello from './01/Hello';

function App() {
  return (  //return되는 것은 밖에 있는 div 하나뿐. <>=fragment태그 여라가지 태그를 반화하고 싶을 때 사용
    <>
      <div className="App">
        <MainHeader />
        <Hello />
        <Hello />
        <Hello />
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
