import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleSectionClick = (sectionId) => {
    setOpen(false);
    if (pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className={`topbar ${isAuthPage ? 'topbar--blend' : ''}`}>
      <Link className="logo" to="/" onClick={() => setOpen(false)}>
        DocStep
      </Link>

      <nav className="nav desktop-only" aria-label="Primary">
        <button 
          type="button"
          onClick={() => handleSectionClick('services')}
          className="nav-link"
        >
          Services
        </button>
        <button 
          type="button"
          onClick={() => handleSectionClick('doctors')}
          className="nav-link"
        >
          Doctors
        </button>
        <button 
          type="button"
          onClick={() => handleSectionClick('booking')}
          className="nav-link"
        >
          Book
        </button>
        <button 
          type="button"
          onClick={() => handleSectionClick('faq')}
          className="nav-link"
        >
          FAQ
        </button>
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
        <div 
          className="mobile-menu" 
          role="dialog" 
          aria-label="Mobile menu"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setOpen(false);
            }
          }}
        >
          <div className="mobile-menu-content">
            <nav className="mobile-nav" aria-label="Mobile">
              <button 
                type="button"
                onClick={() => handleSectionClick('services')}
                className="mobile-nav-link"
              >
                Services
              </button>
              <button 
                type="button"
                onClick={() => handleSectionClick('doctors')}
                className="mobile-nav-link"
              >
                Doctors
              </button>
              <button 
                type="button"
                onClick={() => handleSectionClick('booking')}
                className="mobile-nav-link"
              >
                Book Appointment
              </button>
              <button 
                type="button"
                onClick={() => handleSectionClick('faq')}
                className="mobile-nav-link"
              >
                FAQ
              </button>
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
        </div>
      )}
    </header>
  );
};

export default Header;

