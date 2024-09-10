import { useContext } from "react";
import { QuizStartContext } from "../App";
import BackButton from "./BackButton";
import Timer from "./Timer";
import ProgressBar from "./ProgressBar";
import PropTypes from "prop-types";

function QuizHeader({ currentIndex, questionLength, minutes, seconds }) {
  const setQuizStart = useContext(QuizStartContext);

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex items-center justify-between">
        <BackButton handleClick={setQuizStart} />

        <Timer minutes={minutes} seconds={seconds} />
      </div>

      <p className="font-semibold text-center sm:text-lg">{`${currentIndex} of ${questionLength}`}</p>

      <ProgressBar index={currentIndex} />
    </div>
  );
}

QuizHeader.propTypes = {
  currentIndex: PropTypes.number,
  questionLength: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};

export default QuizHeader;
