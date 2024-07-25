import React, { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function Timer() {
  const { secondsRemaining, disPatch } = useQuiz();
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        disPatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [disPatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
