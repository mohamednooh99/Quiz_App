import React, { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();
const SECS_PER_QUESTION = 30;
const intialState = {
  questions: [],
  // 'loading'  , 'error' , 'active' , 'ready' , 'finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceiver":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
      };
    case "restart":
      return {
        ...intialState,
        status: "ready",
        questions: state.questions,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Action Unkown");
  }
}

export default function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, secondsRemaining },
    disPatch,
  ] = useReducer(reducer, intialState);

  const numQuestions = questions.length;
  const maxPossiblePointts = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  // useEffect(function () {
  //   fetch("http://localhost:8000/questions")
  //     .then((res) => res.json())
  //     .then((data) => disPatch({ type: "dataReceiver", payload: data }))
  //     .catch((err) => disPatch({ type: "dataFailed" }));
  // }, []);
  useEffect(function () {
    fetch("https://api.npoint.io/521b7949747e03878530")
      .then((res) => res.json())
      .then((data) =>
        disPatch({ type: "dataReceiver", payload: data.questions })
      )
      .catch((err) => disPatch({ type: "dataFailed" }));
  }, []);
  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        secondsRemaining,
        numQuestions,
        maxPossiblePointts,

        disPatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("quizConntext was outside of the quizProvider");
  return context;
}
export { QuizProvider, useQuiz };
