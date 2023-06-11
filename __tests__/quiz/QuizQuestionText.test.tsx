import React from 'react';
import '@testing-library/jest-dom';
import QuizQuestionText from "@/app/components/quiz/QuizQuestionText.tsx";
import {render} from "@testing-library/react";

describe('QuizQuestionText', () => {
  test('should render text', () => {
    const { container } = render(<QuizQuestionText text="Question" />);
    expect(container).toHaveTextContent('Question');
  });

  test('should render QuizQuestionText', () => {
    const { container } = render(<QuizQuestionText text="Question" />);
    expect(container).toMatchSnapshot();
  });
});
