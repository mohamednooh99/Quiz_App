import React from "react";

export default function FinishScreen({ points, maxPossiblePointts, disPatch }) {
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
