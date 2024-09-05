import { useEffect, useState } from "react";
import QuizAnswer from "./QuizAnswer";
import { decode } from "html-entities";

function QuizContainer({ question, setCorrectAnswers }) {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  const decodedQuestion = decode(question.question);
  const decodedCategory = decode(question.category);

  const shuffle = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      array.push(array[randomIndex]);
      array.splice(randomIndex, 1);
    }
    return array;
  };

  const checkAnswer = (answer) => {
    if (answer === question.correct_answer) {
      setCorrectAnswers((prev) => prev + 1);
      console.log("The answer is correct");
      return;
    }
    console.log("The answer is incorrect");
  };

  useEffect(() => {
    if (question) {
      const allAnswers = [
        ...question.incorrect_answers,
        question.correct_answer,
      ];
      setShuffledAnswers(shuffle(allAnswers));
    }
  }, [question]);

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
          <QuizAnswer key={answer} answer={answer} checkAnswer={checkAnswer} />
        ))}
      </div>
    </div>
  );
}

export default QuizContainer;
