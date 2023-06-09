import React from 'react';
import styles from '@/app/styles/components/quiz/quiz-question.module.scss';

function QuizQuestionText({ text }: { text: string }) {
  return <h2 className={styles.question}>{text}</h2>;
}

export default QuizQuestionText;
