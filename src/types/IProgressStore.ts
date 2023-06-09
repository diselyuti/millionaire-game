import { IQuizQuestion } from '@/types/IQuizQuestion.ts';
import { IStep } from '@/types/IStep.ts';

export interface IProgressStore {
  questions: IQuizQuestion[];
  steps: IStep[];
  currentQuestion: number;
  isGameOver?: boolean;
}
