import { IQuizAnswer } from '@/types/IQuizAnswer.ts';

export interface IQuizQuestion {
  question: string;
  correctAnswerId: number;
  prizeId: number;
  isAnswered?: boolean;
  answers: IQuizAnswer[];
}
