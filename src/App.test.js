import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Title/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders initial message', () => {
  render(<App />);
  const initialMessage = screen.getByText(/this is sample message./i);
  expect(initialMessage).toBeInTheDocument();
});
