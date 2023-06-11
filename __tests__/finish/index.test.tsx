import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Page from "@/app/finish/page.tsx";
import * as reactRedux from "react-redux";
import {RootState} from "@/stores";
import config from "@/data/config.json";

jest.mock('react-redux');
jest.mock('next/navigation');

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
const useDispatch = jest.spyOn(reactRedux, 'useDispatch');

describe('Start Page', () => {
  beforeEach(() => {
    useSelectorMock.mockImplementation((callback: (state: RootState) => void) => {
      return callback({
        progress: {
          ...config,
          steps: [
            {
              id: 1,
              prize: 100,
              finished: true,
              selected: false,
            }
          ],
          isGameOver: true,
        }
      });
    });

    useDispatch.mockImplementation(() => jest.fn());
  });

  test('renders component correctly', () => {
    const {getByAltText, getByText, getByTestId} = render(<Page />);

    expect(getByAltText('hand OK')).toBeInTheDocument();
    expect(getByText('Total score:')).toBeInTheDocument();
    expect(getByTestId('score')).toHaveTextContent('$100');
    expect(getByText('Try again')).toBeInTheDocument();
  });
});
