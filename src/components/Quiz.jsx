import QuizHeader from "./QuizHeader";
import QuizContainer from "./QuizContainer";
import QuizFinished from "./QuizFinished";
import Loading from "./Loading";
import Button from "./Button";
import useTimer from "../hooks/useTimer";
import { fetchQuestions } from "../utils/quizUtils";
import { useEffect, useState } from "react";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [index, setIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Costume Hook for timer
  const { minutes, seconds } = useTimer(!quizFinished, isLoading);

  // Fetch data from api
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await fetchQuestions();
        setQuestions(data);
        setCurrentQuestion(data[0]);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch after 3 seconds
    const loading = setTimeout(() => {
      loadQuestions();
    }, 3000);

    return () => clearTimeout(loading);
  }, []);

  // Loading the page
  if (isLoading) {
    return <Loading />;
  }

  // Change to next question and check if is finished
  const nextQuestion = () => {
    if (index === questions.length) {
      setQuizFinished(true);
      return;
    }

    setIndex(index + 1);
    setCurrentQuestion(questions[index]);
  };

  return (
    <div className="relative top-[50px] pb-[50px] w-[85%] flex flex-col gap-[30px]">
      {!quizFinished ? (
        <>
          <QuizHeader
            currentIndex={index}
            questionLength={questions.length}
            minutes={minutes}
            seconds={seconds}
          />

          <QuizContainer
            question={currentQuestion}
            setCorrectAnswers={setCorrectAnswers}
          />

          <Button text={"Next"} handleClick={nextQuestion} />
        </>
      ) : (
        <QuizFinished
          correctAnswers={correctAnswers}
          questionLength={questions.length}
          minutes={minutes}
          seconds={seconds}
        />
      )}
    </div>
  );
}

export default Quiz;
