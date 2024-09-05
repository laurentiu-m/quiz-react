import QuizHeader from "./QuizHeader";
import QuizContainer from "./QuizContainer";

function Quiz() {
  return (
    <div className="relative top-[50px] pb-[50px] w-[85%] flex flex-col gap-[30px]">
      <QuizHeader />
      <QuizContainer />

      <button className="bg-primaryColor p-3 text-lg rounded-md font-semibold">
        Next
      </button>
    </div>
  );
}

export default Quiz;
