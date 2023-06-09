import React from 'react';
import QuizAnswerInactive from '@/app/components/quiz/QuizAnswerInactive.tsx';
import styles from '@/app/styles/components/quiz/quiz-answers.module.scss';
import { IQuizAnswer, QuizAnswerStatus } from '@/types/index.ts';
import QuizAnswerWrong from '@/app/components/quiz/QuizAnswerWrong.tsx';
import QuizAnswerSelected from '@/app/components/quiz/QuizAnswerSelected.tsx';
import QuizAnswerCorrect from '@/app/components/quiz/QuizAnswerCorrect.tsx';
import { useDispatch } from 'react-redux';
import { selectAnswer } from '@/stores/progressSlice.ts';

function QuizAnswers({ answers }: { answers: IQuizAnswer[] }) {
  const dispatch = useDispatch();
  const handleAnswerClick = (answer: IQuizAnswer) => {
    dispatch(selectAnswer(answer));
  };

  const charCodeA = 'A'.charCodeAt(0);

  return (
    <section className={styles.answers}>
      {answers.map((answer, index) => {
        const letter = String.fromCharCode(charCodeA + index);

        if (answer.status === QuizAnswerStatus.Correct) {
          return (
            <QuizAnswerCorrect
              key={answer.id}
              letter={letter}
              text={answer.answer}
            />
          );
        }
        if (answer.status === QuizAnswerStatus.Wrong) {
          return (
            <QuizAnswerWrong
              key={answer.id}
              letter={letter}
              text={answer.answer}
            />
          );
        }

        if (answer.status === QuizAnswerStatus.Selected) {
          return (
            <QuizAnswerSelected
              key={answer.id}
              letter={letter}
              text={answer.answer}
            />
          );
        }

        return (
          <QuizAnswerInactive
            key={answer.id}
            letter={letter}
            text={answer.answer}
            onClick={() => handleAnswerClick(answer)}
          />
        );
      })}
    </section>
  );
}

export default QuizAnswers;
