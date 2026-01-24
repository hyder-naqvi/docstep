import { Link } from 'react-router-dom';

const mockSlots = [
  {
    id: 1,
    doctor: 'Dr. Ayesha Rahman',
    specialty: 'Cardiologist',
    day: 'Today',
    time: '6:30 PM',
    type: 'In-person'
  },
  {
    id: 2,
    doctor: 'Dr. Sara Ahmed',
    specialty: 'Pediatrician',
    day: 'Today',
    time: '8:15 PM',
    type: 'Telehealth'
  },
  {
    id: 3,
    doctor: 'Dr. Omar Siddiqui',
    specialty: 'Dermatologist',
    day: 'Tomorrow',
    time: '9:15 AM',
    type: 'In-person'
  },
  {
    id: 4,
    doctor: 'Dr. Imran Khan',
    specialty: 'Psychiatrist',
    day: 'Tomorrow',
    time: '4:00 PM',
    type: 'Telehealth'
  },
  {
    id: 5,
    doctor: 'Dr. Ayesha Rahman',
    specialty: 'Cardiologist',
    day: 'Thu',
    time: '11:00 AM',
    type: 'Telehealth'
  },
  {
    id: 6,
    doctor: 'Dr. Sara Ahmed',
    specialty: 'Pediatrician',
    day: 'Fri',
    time: '3:30 PM',
    type: 'In-person'
  }
];

const AvailabilityPage = () => {
  return (
    <section className="section">
      <div className="breadcrumbs">
        <Link className="text-btn" to="/">
          ← Back to home
        </Link>
      </div>
      <div className="section-header">
        <p className="badge">Live availability</p>
        <h2>Upcoming slots across DocStep</h2>
        <p className="muted">
          Browse near-term openings by doctor and quickly jump to booking on the home page.
        </p>
      </div>

      <div className="grid">
        {mockSlots.map((slot) => (
          <article key={slot.id} className="card">
            <div className="doctor-head">
              <div>
                <h3>{slot.doctor}</h3>
                <p className="muted">
                  {slot.specialty} · {slot.type}
                </p>
              </div>
              <span className="pill">
                {slot.day} · {slot.time}
              </span>
            </div>
            <div className="doctor-actions">
              <Link className="ghost" to="/#booking">
                Go to booking
              </Link>
              <Link className="solid" to="/#doctors">
                View doctors
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AvailabilityPage;

