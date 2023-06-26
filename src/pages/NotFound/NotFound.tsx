import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="notfound-container">
      <figure className="notfound-error">
        <img
          src="././assets/images/team-rocket-trio.svg"
          alt="Team Rocket illustration"
        />
        <div className="notfound-text-container">
          <span className="notfound-text">404</span>
        </div>
      </figure>
      <article className="notfound-info">
        <span>Oh no, the rocket team has won this time!</span>
      </article>{' '}
      <Link className="button" to={'/'}>
        Go to home
      </Link>
    </section>
  );
};

export default NotFound;
