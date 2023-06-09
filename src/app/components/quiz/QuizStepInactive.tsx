import React from 'react';
import styles from '@/app/styles/components/quiz/quiz-step.module.scss';

function QuizStepInactive({ text }: { text: string }) {
  return (
    <article className={styles.step}>
      <p>{text}</p>
    </article>
  );
}

export default QuizStepInactive;
