import React from 'react';
import styles from '@/app/styles/components/quiz/quiz-answer.module.scss';

function QuizAnswerCorrect({ letter, text }: { letter: string; text: string }) {
  return (
    <div className={`${styles.hexagon} ${styles.correct}`}>
      <p className={styles.answerText}>
        <span className={styles.letter}>{letter}</span>
        <span>{text}</span>
      </p>
    </div>
  );
}

export default QuizAnswerCorrect;
