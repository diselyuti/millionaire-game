import React from 'react';
import '@testing-library/jest-dom';
import QuizAnswerWrong from "@/app/components/quiz/QuizAnswerWrong.tsx";
import {render} from "@testing-library/react";

describe('QuizAnswerWrong', () => {
  test('should render texts', () => {
    const { container } = render(<QuizAnswerWrong letter="A" text="Answer" />);
    expect(container).toHaveTextContent('A');
    expect(container).toHaveTextContent('Answer');
  });

  test('should render QuizAnswerWrong', () => {
    const { container } = render(<QuizAnswerWrong letter="A" text="Answer" />);
    expect(container).toMatchSnapshot();
  });
});
