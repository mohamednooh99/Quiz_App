import React from "react";
import Options from "./Options";

export default function Question({ questions, disPatch, answer }) {
  return (
    <div>
      <h4> {questions.question} </h4>
      <Options question={questions} disPatch={disPatch} answer={answer} />
    </div>
  );
}
