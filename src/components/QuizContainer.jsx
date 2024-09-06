import { useEffect, useState } from "react";
import QuizAnswer from "./QuizAnswer";
import { decode } from "html-entities";
import PropTypes from "prop-types";
import { shuffleAnswers } from "../utils/quizUtils";

function QuizContainer({ question, setCorrectAnswers }) {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [isClickable, setIsClickable] = useState(true);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const decodedQuestion = decode(question.question);
  const decodedCategory = decode(question.category);

  useEffect(() => {
    setIsClickable(true);
    setShowCorrectAnswer(false);
    const allAnswers = [
      ...question.incorrect_answers.map((answer) => decode(answer)),
      decode(question.correct_answer),
    ];
    setShuffledAnswers(shuffleAnswers(allAnswers));
  }, [question]);

  const checkAnswer = (answer) => {
    if (!isClickable) return;

    if (answer === question.correct_answer) {
      setCorrectAnswers((prev) => prev + 1);
      setIsClickable(false);
      setShowCorrectAnswer(true);
      console.log("The answer is correct");
      return;
    } else {
      setIsClickable(false);
      console.log("The answer is incorrect");
    }
  };

  return (
    <div className="bg-primaryColor rounded-md py-8 px-5 flex flex-col gap-[30px]">
      <div className="flex flex-col gap-2">
        <p className="font-medium text-center leading-tight">
          {decodedQuestion}
        </p>
        <p className="text-center text-secondFontColor text-sm font-light">
          {decodedCategory}
        </p>
      </div>

      <div className="flex flex-col gap-[15px]">
        {shuffledAnswers.map((answer) => (
          <QuizAnswer
            key={answer}
            answer={answer}
            checkAnswer={checkAnswer}
            correctAnswer={question.correct_answer}
            showCorrectAnswer={showCorrectAnswer}
          />
        ))}
      </div>
    </div>
  );
}

QuizContainer.propTypes = {
  question: PropTypes.object,
  setCorrectAnswers: PropTypes.func,
};

export default QuizContainer;
