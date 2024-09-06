import { useState, createContext } from "react";
import MainPage from "./components/MainPage";
import Quiz from "./components/Quiz";

export const QuizStartContext = createContext();

function App() {
  const [quizStart, setQuizStart] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center font-poppins text-primaryFontColor">
      <QuizStartContext.Provider value={setQuizStart}>
        {!quizStart ? <MainPage /> : <Quiz />}
      </QuizStartContext.Provider>
    </div>
  );
}

export default App;
