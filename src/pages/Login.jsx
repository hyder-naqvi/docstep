import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
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
          <p className="badge">Welcome back</p>
          <h2>Log in to DocStep</h2>
          <p className="muted">Access your appointments, prescriptions, and reports.</p>

          <form onSubmit={onSubmit} className="auth-form">
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
                placeholder="••••••••"
              />
            </label>

            <button className="solid full" type="submit">
              Log in
            </button>
          </form>

          {submitted && (
            <div className="success">
              <p>Demo only: login submitted.</p>
            </div>
          )}

          <p className="muted auth-foot">
            Don’t have an account? <Link to="/signup">Create one</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;

