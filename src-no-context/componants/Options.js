import React from "react";

export default function Options({ question, disPatch, answer }) {
  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} 
        ${
          hasAnswer
            ? index === question.correctOption
              ? "correct"
              : "wronge"
            : ""
        }`}
          key={option}
          disabled={hasAnswer}
          onClick={() => disPatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
