import QuizHeader from "./QuizHeader";
import QuizContainer from "./QuizContainer";
import QuizFinished from "./QuizFinished";
import Loading from "./Loading";
import useTimer from "../hooks/useTimer";
import { fetchQuestions } from "../utils/quizUtils";
import { useEffect, useState } from "react";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Custom hook to handle the quiz timer
  const { minutes, seconds } = useTimer(!quizFinished, isLoading);

  // Fetch quiz questions from API
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await fetchQuestions();
        setQuestions(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    // A 3 seconds delay before the fetch
    const loading = setTimeout(() => {
      loadQuestions();
    }, 3000);

    return () => clearTimeout(loading);
  }, []);

  // Show loading screen until data is fetched
  if (isLoading) {
    return <Loading />;
  }

  // Move to the next question or finish the quiz
  const nextQuestion = () => {
    if (index === questions.length - 1) {
      setQuizFinished(true);
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  // Get the current question
  const currentQuestion = questions[index];

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
            nextQuestion={nextQuestion}
          />
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
