import './App.css';
import { FaTrainSubway } from "react-icons/fa6";
import pic from './main/file.jpg';
import Main from './main/Main'

function App() {

  return (
    // <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${pic})` }}>
    //   <main className="h-full bg-black bg-opacity-50">
    //     <div className="flex items-center justify-center h-full">
    //       <div className="text-center text-white">
    //         <div className='flex justify-center items-center'>
    //           <FaTrainSubway className='mr-1 text-white' />
    //           <span className="text-xl text-white font-semibold">Metoronom</span>
    //         </div>
    //         <h1 className="mb-6 text-5xl font-bold">Busan</h1>
    //         <h3 className="mb-8 text-3xl font-bold">Subway</h3>
    //         <button type="button"
    //           className="rounded-2xl border-2 border-white px-5 py-2 text-m text-white  hover:border-neutral-300 hover:text-neutral-200">
    //           시작하기
    //         </button>
    //       </div>
    //     </div>
    //   </main>
    // </div>
    <div className=''>
    <Main />
    </div>
  );
}

export default App;
