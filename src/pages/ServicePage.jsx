import { Link, useParams } from 'react-router-dom';
import { services } from '../data';

const detailsBySlug = {
  'general-consultation': {
    bullets: [
      'Routine checkups, fever, cough, blood pressure, diabetes follow-ups',
      'Preventive care guidance and referrals if needed',
      'Secure notes and visit summary after your appointment'
    ]
  },
  'specialist-visits': {
    bullets: [
      'Find specialists by condition and availability',
      'Share reports and previous prescriptions before your visit',
      'Follow-ups and care coordination with your primary doctor'
    ]
  },
  'lab-diagnostics': {
    bullets: [
      'Book common tests and diagnostics with reminders',
      'View results and download reports anytime',
      'Share results securely with doctors for faster decisions'
    ]
  },
  telehealth: {
    bullets: [
      'Video consults with encrypted links',
      'Upload images/reports during the call',
      'Digital prescriptions and follow-up instructions'
    ]
  },
  'pharmacy-refills': {
    bullets: [
      'Refill requests in seconds from your medication list',
      'Delivery tracking and pickup options',
      'Medication reminders and adherence support'
    ]
  },
  'care-plans': {
    bullets: [
      'Monthly check-ins for chronic conditions',
      'Vitals monitoring and progress insights',
      'Personalized goals, reminders, and education'
    ]
  }
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="section">
        <div className="card">
          <h2>Service not found</h2>
          <p className="muted">That service page does not exist.</p>
          <Link className="solid" to="/">
            Go back home
          </Link>
        </div>
      </section>
    );
  }

  const detail = detailsBySlug[slug];

  return (
    <section className="section">
      <div className="breadcrumbs">
        <Link className="text-btn" to="/">
          ← Back to home
        </Link>
      </div>

      <div className="card service-hero">
        <div className="service-icon">{service.icon}</div>
        <div>
          <h2>{service.title}</h2>
          <p className="muted">{service.description}</p>
        </div>
      </div>

      <div className="grid service-grid">
        <div className="card">
          <h3>What’s included</h3>
          <ul className="list">
            {(detail?.bullets ?? []).map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Book an appointment</h3>
          <p className="muted">
            Use the booking form on the home page to choose a doctor, date, and mode (telehealth or
            in-person).
          </p>
          <Link className="solid" to="/#booking">
            Go to booking
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;

