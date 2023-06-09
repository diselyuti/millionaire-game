import { createSlice } from '@reduxjs/toolkit';
import {
  IProgressStore,
  IQuizAnswer,
  QuizAnswerStatus,
} from '@/types/index.ts';
import config from '@/data/config.json';

const counterSlice = createSlice({
  name: 'progress',
  initialState: config as IProgressStore,
  reducers: {
    selectAnswer: (state, action: { payload: IQuizAnswer }) => {
      const { payload } = action;
      const { id } = payload;
      const question = state.questions[state.currentQuestion];

      if (question && !question.isAnswered) {
        const correct = question.correctAnswerId === id;

        question.isAnswered = true;

        question.answers.forEach((a) => {
          const answer = a;
          if (answer.id === id) {
            answer.status = correct
              ? QuizAnswerStatus.Correct
              : QuizAnswerStatus.Wrong;
          } else if (answer.id === question.correctAnswerId) {
            answer.status = QuizAnswerStatus.Correct;
          }
        });

        if (correct) {
          state.steps[state.currentQuestion].finished = true;
          if (state.currentQuestion + 1 < state.questions.length) {
            state.currentQuestion += 1;
            state.steps[state.currentQuestion].selected = true;
          } else {
            state.isGameOver = true;
          }
        } else {
          state.isGameOver = true;
        }
      }
    },
    reset: () => config as IProgressStore,
  },
});

export const { selectAnswer, reset } = counterSlice.actions;

export default counterSlice.reducer;
