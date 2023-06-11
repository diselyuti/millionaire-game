import React from 'react';
import '@testing-library/jest-dom';
import QuizStepInactive from "@/app/components/quiz/QuizStepInactive.tsx";
import {render} from "@testing-library/react";

describe('QuizStepInactive', () => {
  test('renders component correctly', () => {
    const { getByText } = render(<QuizStepInactive text="$100" />);
    expect(getByText('$100')).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const { container } = render(<QuizStepInactive text="$100" />);
    expect(container).toMatchSnapshot();
  });
});
