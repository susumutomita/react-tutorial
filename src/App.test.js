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

test('shows an alert when input is too long', () => {
  const { getByRole } = render(<App />);
  const inputField = getByRole('textbox');

  // Mock window.alert
  const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => { });

  fireEvent.change(inputField, { target: { value: 'This is a very long text.' } });

  expect(mockAlert).toHaveBeenCalled();
  mockAlert.mockRestore(); // Important: clean up the mock after the test
});
