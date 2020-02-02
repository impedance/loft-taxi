import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import Header from './Header';
import Signin from '../Signin';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

it('clicking on Logout redirects to Signin', () => {
  const { getByText } = render(
      <Signin />
  );

  fireEvent.click(getByText('Enter'));
  expect(
    <App>
      <Header />
      <Signin />
    </App>
  ).toBe(
    <App>
      <Header />
      <Signin />
    </App>
  );
});
