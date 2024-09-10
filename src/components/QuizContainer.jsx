import { useEffect, useState } from "react";
import QuizAnswer from "./QuizAnswer";
import { decode } from "html-entities";
import PropTypes from "prop-types";
import { shuffleAnswers } from "../utils/quizUtils";

function QuizContainer({ question, setCorrectAnswers, nextQuestion }) {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [isClickable, setIsClickable] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  // Decode questions and category strings to HTML to be readable text
  const decodedQuestion = decode(question.question);
  const decodedCategory = decode(question.category);

  // On every new question reset the states to initial value and shuffle the answers
  useEffect(() => {
    setIsClickable(true);
    setSelectedAnswer(null);
    setShowCorrectAnswer(false);

    const allAnswers = [
      ...question.incorrect_answers.map((answer) => decode(answer)),
      decode(question.correct_answer),
    ];

    setShuffledAnswers(shuffleAnswers(allAnswers));
  }, [question]);

  // Check if the selected answer is correct
  const checkAnswer = (answer) => {
    if (!isClickable) return;

    setSelectedAnswer(answer);
    setIsClickable(false);

    if (answer === question.correct_answer) {
      setCorrectAnswers((prev) => prev + 1);
    } else {
      setShowCorrectAnswer(true);
    }

    setTimeout(() => {
      nextQuestion();
    }, 1500);
  };

  return (
    <div className="bg-primaryColor rounded-md py-8 px-5 flex flex-col gap-[30px] sm:p-10">
      <div className="flex flex-col gap-2">
        <p className="font-medium text-center leading-tight sm:text-lg">
          {decodedQuestion}
        </p>
        <p className="text-center text-secondFontColor text-sm font-light sm:text-base">
          {decodedCategory}
        </p>
      </div>

      <div className="flex flex-col gap-[15px]">
        {shuffledAnswers.map((answer) => (
          <QuizAnswer
            key={answer}
            answer={answer}
            checkAnswer={checkAnswer}
            selectedAnswer={selectedAnswer}
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
  nextQuestion: PropTypes.func,
};

export default QuizContainer;
