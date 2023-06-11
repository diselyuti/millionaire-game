import React from 'react';
import '@testing-library/jest-dom';
import QuizAnswerSelected from "@/app/components/quiz/QuizAnswerSelected.tsx";
import {render} from "@testing-library/react";

describe('QuizAnswerSelected', () => {
  test('should render texts', () => {
    const { container } = render(<QuizAnswerSelected letter="A" text="Answer" />);
    expect(container).toHaveTextContent('A');
    expect(container).toHaveTextContent('Answer');
  });

  test('should render QuizAnswerSelected', () => {
    const { container } = render(<QuizAnswerSelected letter="A" text="Answer" />);
    expect(container).toMatchSnapshot();
  });
});
