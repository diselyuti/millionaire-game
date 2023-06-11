import React from 'react';
import '@testing-library/jest-dom';
import QuizAnswerCorrect from "@/app/components/quiz/QuizAnswerCorrect.tsx";
import {render} from "@testing-library/react";

describe('QuizAnswerCorrect', () => {
  it('should render QuizAnswerCorrect component', () => {
    const { getByText } = render(<QuizAnswerCorrect text='test' letter='A'/>);

    expect(getByText('test')).toBeInTheDocument();
    expect(getByText('A')).toBeInTheDocument();
  });
});
