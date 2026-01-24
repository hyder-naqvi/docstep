const Doctors = ({ doctors }) => (
  <section id="doctors" className="section">
    <div className="section-header">
      <p className="badge">Our doctors</p>
      <h2>Meet the specialists</h2>
      <p className="muted">
        Verified practitioners with transparent experience, ratings, and next available slots.
      </p>
    </div>
    <div className="grid">
      {doctors.map((doctor) => (
        <article key={doctor.id} className="card doctor-card">
          <div className="doctor-head">
            <div>
              <h3>{doctor.name}</h3>
              <p className="muted">
                {doctor.specialty} · {doctor.years} yrs exp
              </p>
            </div>
            <span className="pill">★ {doctor.rating}</span>
          </div>
          <p>{doctor.bio}</p>
          <div className="tags">
            {doctor.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="doctor-actions">
            <button className="ghost">View profile</button>
            <button className="solid">Book</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Doctors;

