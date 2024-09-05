import backIcon from "../assets/back-icon.svg";

function QuizHeader({ currentIndex, questionLength }) {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex items-center justify-between">
        <button className="p-1 bg-primaryColor rounded-md">
          <img src={backIcon} alt="back-icon" className="w-[25px]" />
        </button>

        <p className="font-semibold">{`${currentIndex} of ${questionLength}`}</p>

        <div className="px-3 py-1 bg-primaryColor rounded-md">
          <p className="font-medium">01:50</p>
        </div>
      </div>

      <div className="w-full relative bg-primaryFontColor p-2 rounded-md">
        <div className="absolute left-0 top-0 w-[50%] bg-primaryColor p-2 rounded-md"></div>
      </div>
    </div>
  );
}

export default QuizHeader;
