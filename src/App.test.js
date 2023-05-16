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
  const inputField = screen.getByLabelText(/Message:/i);  // Label text updated to "Message"
  const submitButton = screen.getByText(/Click/i);  // Changed from getByText to getByValue and updated to "Click"

  fireEvent.change(inputField, { target: { value: 'John' } });
  fireEvent.click(submitButton);

  const updatedMessage = screen.getByText(/Hello, John!!/i);
  expect(updatedMessage).toBeInTheDocument();
});
