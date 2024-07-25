import React from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function FinishScreen() {
  const { points, maxPossiblePointts, disPatch } = useQuiz();
  const percentage = (points / maxPossiblePointts) * 100;
  return (
    <>
      <p>
        you scored
        <strong> {points} </strong>
        out of
        {maxPossiblePointts}({Math.ceil(percentage)} %)
      </p>
      <button
        className=" btn btn-ui"
        onClick={() => disPatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
