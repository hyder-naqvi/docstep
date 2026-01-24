import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="section">
    <div className="card">
      <h2>404 — Page not found</h2>
      <p className="muted">The page you’re looking for doesn’t exist.</p>
      <Link className="solid" to="/">
        Go home
      </Link>
    </div>
  </section>
);

export default NotFound;

