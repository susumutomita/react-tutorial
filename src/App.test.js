import { render, screen } from '@testing-library/react';
import App from './App';

test('renders React title', () => {
  render(<App />);
  const linkElement = screen.getByText(/React/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders show list text', () => {
  render(<App />);
  const linkElement = screen.getByText(/show list./i);
  expect(linkElement).toBeInTheDocument();
});

test('renders sample list title', () => {
  render(<App />);
  const linkElement = screen.getByText(/サンプル・リスト/i);
  expect(linkElement).toBeInTheDocument();
});
