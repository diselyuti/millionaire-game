export interface IQuizAnswer {
  id: number;
  answer: string;
  status?: string;
}

// eslint-disable-next-line no-shadow
export enum QuizAnswerStatus {
  // eslint-disable-next-line no-unused-vars
  Correct = 'Correct',
  // eslint-disable-next-line no-unused-vars
  Wrong = 'Wrong',
  // eslint-disable-next-line no-unused-vars
  Selected = 'Selected',
  // eslint-disable-next-line no-unused-vars
  Inactive = 'Inactive',
}
