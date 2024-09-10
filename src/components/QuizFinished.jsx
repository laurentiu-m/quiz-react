import PropTypes from "prop-types";
import Button from "./Button";
import { useContext } from "react";
import { QuizStartContext } from "../App";

function QuizFinished({ correctAnswers, questionLength, minutes, seconds }) {
  const setQuizStart = useContext(QuizStartContext);

  const ratings = [
    { score: 20, message: "Better luck next time!" },
    { score: 40, message: "Keep practicing!" },
    { score: 60, message: "Not bad!" },
    { score: 80, message: "Good job!" },
    { score: 90, message: "Great job!" },
    { score: 99, message: "Amazing!" },
    { score: 100, message: "Quiz Master!" },
  ];

  const percentage = (correctAnswers / questionLength) * 100;
  const ratingMessage = ratings.find(
    (rating) => percentage <= rating.score
  ).message;

  const handleClick = () => {
    setQuizStart(false);
  };

  return (
    <>
      <div className="bg-primaryColor rounded-md px-10 py-12 text-center flex flex-col items-center justify-center gap-[50px]">
        <h1 className="text-3xl font-semibold sm:text-4xl">Quiz Finished!</h1>

        <div className="flex flex-col items-center gap-[5px]">
          <p className="font-light sm:text-lg">{`You score ${correctAnswers}/${questionLength}!`}</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            {ratingMessage}
          </h2>
        </div>

        <p className="text-sm font-light sm:text-base">
          {`You finished in ${minutes} ${
            minutes === 1 ? "minute" : "minutes"
          } and ${seconds} ${seconds === 1 ? "second" : "seconds"}`}
        </p>
      </div>

      <Button text={"Home"} handleClick={handleClick} />
    </>
  );
}

QuizFinished.propTypes = {
  correctAnswers: PropTypes.number,
  questionLength: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};

export default QuizFinished;
