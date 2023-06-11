import React from 'react';
import '@testing-library/jest-dom';
import QuizAnswers from "@/app/components/quiz/QuizAnswers.tsx";
import {render} from "@testing-library/react";
import config from "@/data/config.json";

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

describe('QuizAnswers', () => {
  test('should render texts', () => {
    const { container } = render(<QuizAnswers answers={config.questions[0].answers}/>);
    expect(container).toHaveTextContent('A');
    expect(container).toHaveTextContent('B');
    expect(container).toHaveTextContent('C');
    expect(container).toHaveTextContent('D');
    expect(container).toHaveTextContent('Жовтий та синій');
    expect(container).toHaveTextContent('Червоний та чорний');
    expect(container).toHaveTextContent('Зелений та блакитний');
    expect(container).toHaveTextContent('Червоний та білий');
  });

  test('should render QuizAnswers', () => {
    const { container } = render(<QuizAnswers answers={config.questions[0].answers}/>);
    expect(container).toMatchSnapshot();
  });
});
