import { useEffect, useState } from "react";

const useTimer = (isActive, isLoading) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isActive && !isLoading) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, isLoading]);

  return { minutes, seconds };
};

export default useTimer;
