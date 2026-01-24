import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className={`topbar ${isAuthPage ? 'topbar--blend' : ''}`}>
      <Link className="logo" to="/" onClick={() => setOpen(false)}>
        DocStep
      </Link>

      <nav className="nav desktop-only" aria-label="Primary">
        <a href="/#services">Services</a>
        <a href="/#doctors">Doctors</a>
        <a href="/#booking">Book</a>
        <a href="/#faq">FAQ</a>
      </nav>

      <div className="actions desktop-only">
        <ThemeToggle />
        <Link className="ghost" to="/login">
          Log in
        </Link>
        <Link className="solid" to="/signup">
          Sign up
        </Link>
      </div>

      <button
        type="button"
        className="icon-btn mobile-only"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? '✕' : '☰'}
      </button>

      {open && (
        <div className="mobile-menu" role="dialog" aria-label="Mobile menu">
          <nav className="mobile-nav" aria-label="Mobile">
            <a href="/#services" onClick={() => setOpen(false)}>
              Services
            </a>
            <a href="/#doctors" onClick={() => setOpen(false)}>
              Doctors
            </a>
            <a href="/#booking" onClick={() => setOpen(false)}>
              Book
            </a>
            <a href="/#faq" onClick={() => setOpen(false)}>
              FAQ
            </a>
          </nav>
          <div className="mobile-actions">
            <ThemeToggle />
            <Link className="ghost" to="/login" onClick={() => setOpen(false)}>
              Log in
            </Link>
            <Link className="solid" to="/signup" onClick={() => setOpen(false)}>
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

