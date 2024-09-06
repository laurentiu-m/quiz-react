export const fetchQuestions = async () => {
  try {
    const response = await fetch("https://opentdb.com/api.php?amount=10");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error.message);
  }
};

export const shuffleAnswers = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    array.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return array;
};
