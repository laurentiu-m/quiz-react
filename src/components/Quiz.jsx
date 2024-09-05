import QuizHeader from "./QuizHeader";
import QuizContainer from "./QuizContainer";
import { useEffect, useState } from "react";

function Quiz() {
  const [questions, setQuestions] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://opentdb.com/api.php?amount=10");
      const data = await response.json();
      setQuestions(data.results);
      setCurrentQuestion(data.results[0]);
    };

    fetchData();
  }, []);

  const nextQuestion = () => {
    if (index === questions.length) {
      setQuizFinished(true);
      setCurrentQuestion(null);
      return;
    }

    setIndex(index + 1);
    setCurrentQuestion(questions[index]);
  };

  console.log(currentQuestion, index);

  return (
    <div className="relative top-[50px] pb-[50px] w-[85%] flex flex-col gap-[30px]">
      {questions && (
        <QuizHeader currentIndex={index} questionLength={questions.length} />
      )}
      {currentQuestion && <QuizContainer question={currentQuestion} />}
      {quizFinished && <h1>Quiz Finished</h1>}
      <button
        onClick={nextQuestion}
        className="bg-primaryColor p-3 text-lg rounded-md font-semibold"
      >
        Next
      </button>
    </div>
  );
}

export default Quiz;
