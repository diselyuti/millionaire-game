import React from 'react';
import styles from '@/app/styles/components/quiz/quiz-step.module.scss';

function QuizStepSelected({ text }: { text: string }) {
  return (
    <article className={`${styles.step} ${styles.selected}`}>
      <p>{text}</p>
    </article>
  );
}

export default QuizStepSelected;
