import { render, screen } from '@testing-library/react';
import JuegoCarta from './JuegoCarta';

test('renders learn react link', () => {
  render(<JuegoCarta />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
