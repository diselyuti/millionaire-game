import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import * as router from 'next/router';
import * as reactRedux from 'react-redux';
import Page from "@/app/game/page.tsx";
import {RootState} from "@/stores";
import config from "@/data/config.json";

jest.mock('react-redux');
jest.mock('next/navigation');

describe('Page', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useRouterMock = jest.spyOn(router, 'useRouter');

  beforeEach(() => {
    useSelectorMock.mockImplementation((callback: (state: RootState) => void) => {
      return callback({
        progress: {
          ...config,
          currentQuestion: 0,
        }
      });
    });

    // @ts-expect-error
    useRouterMock.mockImplementation(() => ({
      push: jest.fn(),
    }));
  });

  test('renders question text and answers', () => {
    render(<Page />);

    expect(screen.getByText(config.questions[0].question)).toBeInTheDocument();
    for (const answer of config.questions[0].answers) {
      expect(screen.getByText(answer.answer)).toBeInTheDocument();
    }
  });

  test('toggles the menu on menu button click', () => {
    render(<Page />);

    fireEvent.click(screen.getByAltText('open menu button'));

    expect(screen.getByAltText('close menu button')).toBeInTheDocument();

    fireEvent.click(screen.getByAltText('close menu button'));

    expect(screen.getByAltText('open menu button')).toBeInTheDocument();
  });
});
