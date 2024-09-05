import QuizAnswer from "./QuizAnswer";

function QuizContainer() {
  return (
    <div className="bg-primaryColor rounded-md py-8 px-5 flex flex-col gap-[30px]">
      <div className="flex flex-col gap-2">
        <p className="font-medium text-justify leading-tight">
          What is the question? And what is the correct answer?
        </p>
        <p className="text-center text-secondFontColor text-sm font-light">
          Question Category
        </p>
      </div>

      <div className="flex flex-col gap-[15px]">
        <QuizAnswer />
      </div>
    </div>
  );
}

export default QuizContainer;
