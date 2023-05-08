import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';

describe('App', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(<Home />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('hello world');
  });
  it('renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('NotFound');
  });
});
