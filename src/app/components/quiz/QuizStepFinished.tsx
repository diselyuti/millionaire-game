import React from 'react';
import styles from '@/app/styles/components/quiz/quiz-step.module.scss';

function QuizStepFinished({ text }: { text: string }) {
  return (
    <article className={`${styles.step} ${styles.finished}`}>
      <p>{text}</p>
    </article>
  );
}

export default QuizStepFinished;
