import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
import { MemoryRouter } from 'react-router-dom';

test('renders NotFound component', () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>,
  );

  // Verifique se os elementos esperados estão presentes na página NotFound
  expect(screen.getByAltText('Team Rocket illustration')).toBeInTheDocument();
  expect(screen.getByText('404')).toBeInTheDocument();
  expect(
    screen.getByText('Oh no, the rocket team has won this time!'),
  ).toBeInTheDocument();
  expect(screen.getByText('Go to home')).toBeInTheDocument();
});
