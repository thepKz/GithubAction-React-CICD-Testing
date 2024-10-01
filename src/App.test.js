import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders Math Operations heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Math Operations/i);
  expect(headingElement).toBeInTheDocument();
});