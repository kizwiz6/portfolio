// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio', () => {
  render(<App />);
  const headingElement = screen.getByText(/Kieran Emery/i);
  expect(headingElement).toBeInTheDocument();
});