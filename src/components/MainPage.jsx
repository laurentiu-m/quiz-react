import MainPageButton from "./MainPageButton";

function MainPage() {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center text-center gap-[50px] px-[20px] min-w-[250px]">
      <h1 className="text-[55px] font-bold uppercase tracking-[2px] leading-tight sm:text-[90px]">
        <span className="text-primaryColor">Quiz</span> React
      </h1>

      <MainPageButton />
    </div>
  );
}

export default MainPage;
