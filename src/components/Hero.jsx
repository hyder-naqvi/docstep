import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="hero">
    <div className="hero-copy">
      <p className="badge">Digital clinic for modern care</p>
      <h1>
        Book doctors, manage prescriptions, and consult online—all in one secure
        portal.
      </h1>
      <p className="lede">
        Skip waiting rooms. Find the right specialist, schedule visits, join
        telehealth, and get follow-ups with reminders and shared records.
      </p>
      <div className="hero-actions">
        <a className="solid" href="#booking">
          Book an appointment
        </a>
        <a className="ghost" href="#services">
          Explore services
        </a>
      </div>
      <div className="hero-stats">
        <div>
          <strong>120+</strong>
          <span>Doctors across 12 specialties</span>
        </div>
        <div>
          <strong>15k</strong>
          <span>Appointments booked this year</span>
        </div>
        <div>
          <strong>4.9★</strong>
          <span>Average patient satisfaction</span>
        </div>
      </div>
    </div>
    <div className="hero-card">
      <p className="muted">Next available slots</p>
      <ul>
        <li>
          <div>
            <strong>Dr. Ayesha Rahman</strong>
            <span>Cardiologist</span>
          </div>
          <span className="pill">Today · 6:30 PM</span>
        </li>
        <li>
          <div>
            <strong>Dr. Sara Ahmed</strong>
            <span>Pediatrician</span>
          </div>
          <span className="pill">Tomorrow · 9:15 AM</span>
        </li>
        <li>
          <div>
            <strong>Dr. Omar Siddiqui</strong>
            <span>Dermatologist</span>
          </div>
          <span className="pill">Thu · 3:45 PM</span>
        </li>
      </ul>
      <Link className="solid full" to="/availability">
        See all availability
      </Link>
    </div>
  </section>
);

export default Hero;

