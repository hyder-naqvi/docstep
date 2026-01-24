const Testimonials = ({ testimonials, faqs }) => (
  <section id="faq" className="section testimonials">
    <div className="section-header">
      <p className="badge">Trust and support</p>
      <h2>Patients love the experience</h2>
      <p className="muted">Reliable scheduling, clear communication, and secure follow-ups.</p>
    </div>
    <div className="columns">
      <div className="card">
        <h3>Testimonials</h3>
        <ul className="testi-list">
          {testimonials.map((item) => (
            <li key={item.id}>
              <div className="quote">“{item.quote}”</div>
              <div className="author">
                <strong>{item.name}</strong>
                <span>{'★'.repeat(item.rating)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h3>FAQs</h3>
        <ul className="faq-list">
          {faqs.map((faq) => (
            <li key={faq.q}>
              <strong>{faq.q}</strong>
              <p className="muted">{faq.a}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Testimonials;

