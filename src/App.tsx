import Header from "./components/Header";
import { ImClouds, IMwater } from "./assets/images";

function App() {

  return (
    <div className=" flex items-center relative h-[100vh] overflow-hidden bg-gray-300">
      <div className="object-cover h-[100%] absolute">
        <img src={IMwater} alt="" />
      </div>
      <div className="absolute top-0 z-100">
        <Header />
      </div>
      <div className="absolute top-[90px] text-[#0E5666] right-[60px] text-right font-black text-4xl">
        <p>Rainfall Prediction And <br /> Water Resource Management <br /></p>
        <p className="text-2xl text-black font-bold">Using Indian Knowledge System</p>
      </div>
      <div className="bg-gray-300 h-[70px] rounded-l-lg w-[400px] border border-black rounded-lg hover:shadow-2xl cursor-pointer absolute bottom-[210px] left-[330px] flex felx-row">
        <div className="h-full w-full text-right text-3xl text-[#0E5666] py-3 font-bold rounded-r-lg"> PRE</div>
        <div className="bg-[#0E5666] h-full w-full text-3xl text-white py-3 font-bold rounded-r-lg">DICT</div>
      </div>
      <div className="absolute bottom-1 right-1">
        <img src={ImClouds} alt="" />
      </div>
    </div>
  );
}

export default App;