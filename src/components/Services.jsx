import { Link } from 'react-router-dom';

const Services = ({ services }) => (
  <section id="services" className="section">
    <div className="section-header">
      <p className="badge">What we offer</p>
      <h2>Comprehensive care at every step</h2>
      <p className="muted">
        From first consultation to follow-up, we keep your care connected, secure, and
        convenient.
      </p>
    </div>
    <div className="grid">
      {services.map((service) => (
        <article key={service.id} className="card">
          {service.image && (
            <div className="service-media">
              <img src={service.image} alt={service.title} />
            </div>
          )}
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <Link className="text-btn" to={`/services/${service.slug}`}>
            Learn more →
          </Link>
        </article>
      ))}
    </div>
  </section>
);

export default Services;

