import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders birdie', () => {
  render(<App />);
  const branding = screen.getByText(/birdie/i);
  expect(branding).toBeInTheDocument();
});
