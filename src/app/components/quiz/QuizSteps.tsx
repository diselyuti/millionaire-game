import React from 'react';
import QuizStepInactive from '@/app/components/quiz/QuizStepInactive.tsx';
import QuizStepFinished from '@/app/components/quiz/QuizStepFinished.tsx';
import QuizStepSelected from '@/app/components/quiz/QuizStepSelected.tsx';
import styles from '@/app/styles/components/quiz/quiz-step.module.scss';
import { IStep } from '@/types/IStep.ts';

function QuizSteps({ steps }: { steps: IStep[] }) {
  return (
    <div className={styles.steps}>
      {steps.map((step) => {
        if (step.finished) {
          return (
            <QuizStepFinished
              key={step.id}
              text={`$${step.prize.toLocaleString()}`}
            />
          );
        }
        if (step.selected) {
          return (
            <QuizStepSelected
              key={step.id}
              text={`$${step.prize.toLocaleString()}`}
            />
          );
        }
        return (
          <QuizStepInactive
            key={step.id}
            text={`$${step.prize.toLocaleString()}`}
          />
        );
      })}
    </div>
  );
}

export default QuizSteps;
