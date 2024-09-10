import PropTypes from "prop-types";

export default function QuizAnswer({
  answer,
  checkAnswer,
  correctAnswer,
  selectedAnswer,
  showCorrectAnswer,
}) {
  return (
    <div
      onClick={() => checkAnswer(answer)}
      className={`flex items-center gap-[10px] border-[2px] p-3 rounded-lg cursor-pointer ${
        selectedAnswer === answer
          ? answer === correctAnswer
            ? "bg-correctColor"
            : "bg-errorColor"
          : showCorrectAnswer && answer === correctAnswer
          ? "bg-correctColor"
          : "bg-transparent"
      }`}
    >
      <p className={`w-full text-sm font-medium`}>{answer}</p>
    </div>
  );
}

QuizAnswer.propTypes = {
  answer: PropTypes.string,
  checkAnswer: PropTypes.func,
  correctAnswer: PropTypes.string,
  selectedAnswer: PropTypes.string,
  showCorrectAnswer: PropTypes.bool,
};
