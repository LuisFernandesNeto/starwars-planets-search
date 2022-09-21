import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('I am your test', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading', { name: /filter by name/i, level: 5 });
  expect(linkElement).toBeInTheDocument();

  const inputElement = screen.getByTestId('name-filter');
  expect(inputElement).toBeInTheDocument();

  userEvent.type(inputElement, 'Tatooine');
});
