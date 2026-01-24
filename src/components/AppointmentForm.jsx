import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  doctor: '',
  date: '',
  mode: 'In-person',
  notes: ''
};

const AppointmentForm = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(initialForm);
    setSubmitted(false);
  };

  return (
    <section id="booking" className="section form-section">
      <div className="section-header">
        <p className="badge">Book now</p>
        <h2>Schedule your appointment</h2>
        <p className="muted">
          Share a few details and we will lock the slot, send reminders, and prepare your visit.
        </p>
      </div>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              Full name
              <input
                required
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="Ayesha Noor"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="you@example.com"
              />
            </label>
            <label>
              Preferred doctor
              <input
                value={form.doctor}
                onChange={(e) => updateField('doctor', e.target.value)}
                placeholder="Dr. Sara Ahmed"
              />
            </label>
            <label>
              Date and time
              <input
                type="datetime-local"
                required
                value={form.date}
                onChange={(e) => updateField('date', e.target.value)}
              />
            </label>
            <label>
              Mode
              <select value={form.mode} onChange={(e) => updateField('mode', e.target.value)}>
                <option>In-person</option>
                <option>Telehealth</option>
              </select>
            </label>
            <label className="full">
              Notes (optional)
              <textarea
                rows="3"
                value={form.notes}
                onChange={(e) => updateField('notes', e.target.value)}
                placeholder="Symptoms, reports, goals..."
              />
            </label>
          </div>
          <div className="form-actions">
            <button type="button" className="ghost" onClick={handleReset}>
              Reset
            </button>
            <button type="submit" className="solid">
              Confirm booking
            </button>
          </div>
        </form>
        {submitted && (
          <div className="success">
            <p>Booking received. We will confirm the slot and send you reminders.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AppointmentForm;

