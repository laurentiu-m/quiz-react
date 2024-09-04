export default function MainPageButton() {
  return (
    <div className="relative flex items-center justify-center group">
      <div className="absolute transition-all ease-linear opacity-0 w-[200px] h-[50px] z-[-1] bg-primaryColor/40 blur-xl cursor-pointer group-hover:opacity-100"></div>
      <button className="relative z-10 w-[160px] h-[50px] rounded-md text-xl tracking-[2px] font-bold bg-primaryColor transition-all ease-linear hover:scale-110 hover:brightness-105">
        Play
      </button>
    </div>
  );
}
