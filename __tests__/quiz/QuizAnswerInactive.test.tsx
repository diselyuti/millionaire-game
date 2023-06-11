import React from 'react';
import '@testing-library/jest-dom';
import {render} from "@testing-library/react";
import QuizAnswerInactive from "@/app/components/quiz/QuizAnswerInactive.tsx";

describe('QuizAnswerInactive', () => {
  it('should render QuizAnswerInactive component', () => {
    const { getByText } = render(<QuizAnswerInactive text='test' onClick={() => {}} letter='A'/>);
    expect(getByText('test')).toBeInTheDocument();
  });

  it('should render QuizAnswerInactive component with letter', () => {
    const { getByText } = render(<QuizAnswerInactive text='test' onClick={() => {}} letter='A'/>);
    expect(getByText('A')).toBeInTheDocument();
  });

  it('should emit onClick event', () => {
    const onClick = jest.fn();
    const { getByText } = render(<QuizAnswerInactive text='test' onClick={onClick} letter='A'/>);
    getByText('test').click();
    expect(onClick).toHaveBeenCalled();
  });
});
