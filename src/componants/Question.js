import React from "react";
import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

export default function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h2> {question.question} </h2>
      <Options question={question} />
    </div>
  );
}
