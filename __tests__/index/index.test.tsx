import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Page from "@/app/page.tsx";
import {createStore} from "redux";
import {Provider} from "react-redux";

describe('Start Page', () => {

  test('renders component correctly', () => {
    const store = createStore(() => ({}));
    store.dispatch = jest.fn();

    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <Page />
      </Provider>
    );

    expect(getByAltText('hand OK')).toBeInTheDocument();
    expect(getByText('Who wants to be a millionaire?')).toBeInTheDocument();
    expect(getByText('Start')).toBeInTheDocument();
  });
});
