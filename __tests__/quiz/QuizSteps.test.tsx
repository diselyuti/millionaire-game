import React from 'react';
import '@testing-library/jest-dom';
import {render} from "@testing-library/react";
import QuizSteps from "@/app/components/quiz/QuizSteps.tsx";
import config from "@/data/config.json";
describe('QuizSteps', () => {
  test('renders component correctly', () => {
    const { getByText } = render(<QuizSteps steps={config.steps}/>);
    expect(getByText('$100')).toBeInTheDocument();
    expect(getByText('$200')).toBeInTheDocument();
    expect(getByText('$300')).toBeInTheDocument();
    expect(getByText('$500')).toBeInTheDocument();
    expect(getByText('$1,000')).toBeInTheDocument();
    expect(getByText('$2,000')).toBeInTheDocument();
    expect(getByText('$4,000')).toBeInTheDocument();
    expect(getByText('$8,000')).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const { container } = render(<QuizSteps steps={config.steps}/>);
    expect(container).toMatchSnapshot();
  });
});
