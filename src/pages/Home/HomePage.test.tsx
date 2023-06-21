import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('Given a home page', () => {
  test('When there is a title, then render it on the page', () => {
    render(<HomePage />);
    const title = screen.getByRole('heading', {
      level: 1,
      name: /Coming soon!/i,
    });
    expect(title).toBeInTheDocument();
  });
});
