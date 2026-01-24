import { Link } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => setForm((p) => ({ ...p, [field]: value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section auth">
      <div className="auth-shell">
        <div className="card auth-card">
          <p className="badge">Create account</p>
          <h2>Sign up for DocStep</h2>
          <p className="muted">Book faster, get reminders, and keep all records in one place.</p>

          <form onSubmit={onSubmit} className="auth-form">
            <label>
              Full name
              <input
                required
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="Ayesha Noor"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="you@example.com"
              />
            </label>
            <label>
              Password
              <input
                type="password"
                required
                value={form.password}
                onChange={(e) => update('password', e.target.value)}
                placeholder="Create a strong password"
              />
            </label>

            <button className="solid full" type="submit">
              Create account
            </button>
          </form>

          {submitted && (
            <div className="success">
              <p>Demo only: signup submitted.</p>
            </div>
          )}

          <p className="muted auth-foot">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;

