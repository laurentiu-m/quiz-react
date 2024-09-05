export default function QuizAnswer({ answer, checkAnswer }) {
  return (
    <div className="flex items-center gap-[10px] border-[2px] border-primaryFontColor p-3 rounded-lg">
      <button
        onClick={() => checkAnswer(answer)}
        className="p-[10px] rounded-full border-[2px] border-primaryFontColor bg-transparent"
      ></button>
      <p className="w-full font-medium">{answer}</p>
    </div>
  );
}
