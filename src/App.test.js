import { render, screen } from '@testing-library/react';
import App from './App';

test('renders original title and message', () => {
  render(<App />);
  const originalTitle = screen.getAllByText(/Title/i);
  const originalMessage = screen.getAllByText(/this is sample message./i);

  // Ensure there are 2 instances of original title and message
  expect(originalTitle.length).toEqual(2);
  expect(originalMessage.length).toEqual(2);
});

test('renders new title and message', () => {
  render(<App />);
  const newTitle = screen.getByText(/新しいタイトル/i);
  const newMessage = screen.getByText(/これは新しいメッセージです。/i);

  expect(newTitle).toBeInTheDocument();
  expect(newMessage).toBeInTheDocument();
});

test('checks total number of title and message', () => {
  render(<App />);
  const totalTitle = screen.getAllByText(/Title|新しいタイトル/i);
  const totalMessage = screen.getAllByText(/this is sample message.|これは新しいメッセージです。/i);

  // Ensure there are 3 instances of title and message in total
  expect(totalTitle.length).toEqual(3);
  expect(totalMessage.length).toEqual(3);
});
