function QuizFinished({ correctAnswers, questionLength, minutes, seconds }) {
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

  return (
    <div className="bg-primaryColor rounded-md py-8 px-5 flex flex-col items-center justify-center gap-[40px]">
      <h1 className="text-3xl font-semibold">Quiz Finished!</h1>

      <div className="flex flex-col items-center gap-[5px]">
        <p className="font-semibold text-lg">{`You score ${correctAnswers}/${questionLength}!`}</p>
        <h2 className="text-lg font-normal">{ratingMessage}</h2>
      </div>

      <p className="text-center font-light">
        {`You finished in ${minutes} minuets and ${seconds} seconds`}
      </p>
    </div>
  );
}

export default QuizFinished;
