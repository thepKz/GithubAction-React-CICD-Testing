import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import MathOperations from './MathOperations';

test('performs addition correctly', () => {
  render(<MathOperations />);
  
  const num1Input = screen.getByRole('spinbutton', { name: '' })[0];
  const num2Input = screen.getByRole('spinbutton', { name: '' })[1];
  const addButton = screen.getByText('Add');
  
  fireEvent.change(num1Input, { target: { value: '5' } });
  fireEvent.change(num2Input, { target: { value: '3' } });
  fireEvent.click(addButton);
  
  expect(screen.getByText('Result: 8')).toBeInTheDocument();
});

test('performs subtraction correctly', () => {
  render(<MathOperations />);
  
  const num1Input = screen.getByRole('spinbutton', { name: '' })[0];
  const num2Input = screen.getByRole('spinbutton', { name: '' })[1];
  const subtractButton = screen.getByText('Subtract');
  
  fireEvent.change(num1Input, { target: { value: '10' } });
  fireEvent.change(num2Input, { target: { value: '4' } });
  fireEvent.click(subtractButton);
  
  expect(screen.getByText('Result: 6')).toBeInTheDocument();
});

test('performs multiplication correctly', () => {
  render(<MathOperations />);
  
  const num1Input = screen.getByRole('spinbutton', { name: '' })[0];
  const num2Input = screen.getByRole('spinbutton', { name: '' })[1];
  const multiplyButton = screen.getByText('Multiply');
  
  fireEvent.change(num1Input, { target: { value: '6' } });
  fireEvent.change(num2Input, { target: { value: '7' } });
  fireEvent.click(multiplyButton);
  
  expect(screen.getByText('Result: 42')).toBeInTheDocument();
});

test('performs division correctly', () => {
  render(<MathOperations />);
  
  const num1Input = screen.getByRole('spinbutton', { name: '' })[0];
  const num2Input = screen.getByRole('spinbutton', { name: '' })[1];
  const divideButton = screen.getByText('Divide');
  
  fireEvent.change(num1Input, { target: { value: '15' } });
  fireEvent.change(num2Input, { target: { value: '3' } });
  fireEvent.click(divideButton);
  
  expect(screen.getByText('Result: 5')).toBeInTheDocument();
});

test('handles division by zero', () => {
  render(<MathOperations />);
  
  const num1Input = screen.getByRole('spinbutton', { name: '' })[0];
  const num2Input = screen.getByRole('spinbutton', { name: '' })[1];
  const divideButton = screen.getByText('Divide');
  
  fireEvent.change(num1Input, { target: { value: '10' } });
  fireEvent.change(num2Input, { target: { value: '0' } });
  fireEvent.click(divideButton);
  
  expect(screen.getByText('Result: Error: Division by zero')).toBeInTheDocument();
});