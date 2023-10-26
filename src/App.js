import Random from "./Components/Random";
import Tag from "./Components/Tag";
import './App.css';

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col background  items-center">
    <h1 className="bg-white rounded-lg text-4xl uppercase w-11/12 text-center py-2 mt-[40px] font-bold">Random Gifs</h1>
    <div className="flex flex-col items-center gap-y-10 w-full">
      <Random />
      <Tag />
    </div>
    </div>
  );
}

export default App;
