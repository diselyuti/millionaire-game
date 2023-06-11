import React from 'react';
import '@testing-library/jest-dom';
import Button from "@/app/components/common/Button.tsx";
import {render} from "@testing-library/react";

describe('Button', () => {
  test('renders component correctly', () => {
    const { getByText } = render(<Button>Start</Button>);

    expect(getByText('Start')).toBeInTheDocument();
  });

  test('renders component with custom class', () => {
    const { getByText } = render(<Button className="custom-class">Start</Button>);

    expect(getByText('Start')).toHaveClass('custom-class');
  });

  test('renders component with custom click handler', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Start</Button>);

    getByText('Start').click();
    expect(onClick).toHaveBeenCalled();
  });
});
