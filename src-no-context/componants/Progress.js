export default function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePointts,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <div className="main-points">
        <p>
          {" "}
          Question <strong> {index + 1} </strong> / {numQuestions}{" "}
        </p>
        <p className="points">
          {" "}
          {points} / {maxPossiblePointts} points{" "}
        </p>
      </div>
    </header>
  );
}
