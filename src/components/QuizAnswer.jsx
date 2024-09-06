import PropTypes from "prop-types";

export default function QuizAnswer({
  answer,
  checkAnswer,
  correctAnswer,
  showCorrectAnswer,
}) {
  return (
    <div
      onClick={() => checkAnswer(answer)}
      className="flex items-center gap-[10px] border-[2px] border-primaryFontColor p-3 rounded-lg"
    >
      <button
        className={`p-[10px] rounded-full border-[2px] border-primaryFontColor ${
          showCorrectAnswer && correctAnswer === answer
            ? "bg-primaryFontColor"
            : "bg-transparent"
        }`}
      ></button>
      <p className="w-full font-medium">{answer}</p>
    </div>
  );
}

QuizAnswer.propTypes = {
  answer: PropTypes.string,
  checkAnswer: PropTypes.func,
};
