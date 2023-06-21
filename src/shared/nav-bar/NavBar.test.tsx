import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './NavBar';
describe('Given a nav bar component', () => {
  test('When rendering, logo should be in the document', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );

    const logoLink = screen.getByRole('img');

    expect(logoLink).toBeInTheDocument();
  });
});
