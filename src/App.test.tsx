import { render, screen } from '@testing-library/react';
import App from './App';

// TODO avoid using getByTestId when possible
test('renders game', () => {
  render(<App />);
  screen.getByTestId("game");
});