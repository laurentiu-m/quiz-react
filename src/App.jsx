import { useState } from "react";
import MainPage from "./components/MainPage";
import Quiz from "./components/Quiz";

function App() {
  const [gameStart, setGameStart] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center font-poppins text-primaryFontColor">
      {gameStart ? <Quiz /> : <MainPage />}
    </div>
  );
}

export default App;
