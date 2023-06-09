import React from 'react';
import styles from '@/app/styles/components/quiz/quiz-answer.module.scss';

function QuizAnswerInactive({
  letter,
  text,
  onClick,
}: {
  letter: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      className={styles.hexagon}
      type="button"
      onClick={onClick}
      onKeyDown={onClick}
    >
      <p className={styles.answerText}>
        <span className={styles.letter}>{letter}</span>
        <span>{text}</span>
      </p>
    </button>
  );
}

export default QuizAnswerInactive;
