import React from 'react';
import '@testing-library/jest-dom';
import QuizStepFinished from "@/app/components/quiz/QuizStepFinished.tsx";
import {render} from "@testing-library/react";

describe('QuizStepFinished', () => {
  test('renders component correctly', () => {
    const { getByText } = render(<QuizStepFinished text="$100" />);
    expect(getByText('$100')).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const { container } = render(<QuizStepFinished text="$100" />);
    expect(container).toMatchSnapshot();
  });
});
