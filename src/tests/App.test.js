import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const pageTitle = screen.getByText(/We use only the finest and freshnest ingredients/i);
  expect(pageTitle).toBeInTheDocument();
});
