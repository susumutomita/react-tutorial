import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title and messages', () => {
  render(<App />);
  const title = screen.getByText(/Content page/i);
  const message1 = screen.getByText(/This is Content sample./i);
  const message2 = screen.getByText(/※これはテーマのサンプルです。/i);

  expect(title).toBeInTheDocument();
  expect(message1).toBeInTheDocument();
  expect(message2).toBeInTheDocument();
});

test('renders with light theme', () => {
  render(<App />);
  const title = screen.getByText(/Content page/i);
  const message1 = screen.getByText(/This is Content sample./i);
  const message2 = screen.getByText(/※これはテーマのサンプルです。/i);

  // Check the background color and text color to verify the light theme
  expect(title).toHaveStyle({ backgroundColor: '#eef', color: '#006' });
  expect(message1).toHaveStyle({ backgroundColor: '#eef', color: '#006' });
  expect(message2).toHaveStyle({ backgroundColor: '#eef', color: '#006' });
});
