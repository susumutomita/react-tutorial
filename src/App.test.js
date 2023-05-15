import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders React title', () => {
  render(<App />);
  const linkElement = screen.getByText(/React/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders initial message', () => {
  render(<App />);
  const initialMessage = screen.getByText(/type your name/i);
  expect(initialMessage).toBeInTheDocument();
});

test('updates message after form submission', () => {
  render(<App />);
  const inputField = screen.getByLabelText(/Name:/i);
  const submitButton = screen.getByText(/Submit/i);

  fireEvent.change(inputField, { target: { value: 'John' } });
  fireEvent.click(submitButton);

  const updatedMessage = screen.getByText(/Hello, John!!/i);
  expect(updatedMessage).toBeInTheDocument();
});

test('renders Message component with correct title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Children!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders each part of Message component content', () => {
  render(<App />);
  const contentParts = [
    "これはコンポーネント内のコンテンツです",
    "マルでテキストを分割し、リストにして表示します",
    "改行は必要ありません"
  ];

  contentParts.forEach(part => {
    const linkElement = screen.getByText(new RegExp(part, 'i'));
    expect(linkElement).toBeInTheDocument();
  });
});
