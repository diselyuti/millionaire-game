import React from 'react';
import '@testing-library/jest-dom';
import QuizStepSelected from "@/app/components/quiz/QuizStepSelected.tsx";
import {render} from "@testing-library/react";

describe('QuizStepSelected', () => {
  test('renders component correctly', () => {
    const { getByText } = render(<QuizStepSelected text="$100" />);
    expect(getByText('$100')).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const { container } = render(<QuizStepSelected text="$100" />);
    expect(container).toMatchSnapshot();
  });
});
