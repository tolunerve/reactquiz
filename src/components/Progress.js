import React from "react";
import { useQuiz } from "./QuizContext";

const Progress = () => {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();
  const theIndex = index + 1;
  return (
    <header className="progress">
      <progress max={numQuestions} value={theIndex + Number(answer !== null)} />
      <p>
        Question<strong>{theIndex}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
