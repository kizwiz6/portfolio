// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio', async () => {
  render(<App />);
  const headingElement = await screen.findByRole('heading', { name: /Kieran Emery/i });
  expect(headingElement).toBeInTheDocument();
});