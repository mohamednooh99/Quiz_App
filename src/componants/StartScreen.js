import { useQuiz } from "../contexts/QuizContext";
import "./App.css";

export default function StartScreen() {
  const { numQuestions, disPatch } = useQuiz();
  return (
    <div>
      <h2> Welcome to The React Quiz!</h2>
      <p> {numQuestions} question to test your mastery </p>
      <button
        className="btn btn-ui"
        onClick={() => disPatch({ type: "start" })}
      >
        {" "}
        let's start{" "}
      </button>
    </div>
  );
}
